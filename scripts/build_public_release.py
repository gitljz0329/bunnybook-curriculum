# SPDX-License-Identifier: Apache-2.0

from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_TARGET = ROOT / "dist" / "bunnybook-curriculum"
ROOT_FILES = (
    ".gitattributes",
    ".gitignore",
    "README.md",
    "MVP_README.md",
    "LICENSE.md",
    "NOTICE",
    "THIRD_PARTY_NOTICES.md",
    "TRADEMARKS.md",
    "CITATION.cff",
    "CONTRIBUTING.md",
    "SECURITY.md",
    "CODE_OF_CONDUCT.md",
    "requirements-mcp.txt",
    "index.html",
    "styles.css",
    "app.js",
    "site-config.js",
    "llms.txt",
    "llms-full.txt",
    "netlify.toml",
    "robots.txt",
    "sitemap.xml",
    "favicon.svg",
)
DIRECTORIES = (
    ".github",
    "LICENSES",
    "mvp",
    "mvp_src",
    "agent_runtime",
    "integrations/kimi/bunnybook",
    "docs",
    "themes",
    "materials",
    "agent",
    "api",
)
PUBLIC_SCRIPTS = (
    "browser_persona_qa.js",
    "build_public_release.py",
    "sync_kimi_plugin.py",
    "validate_kimi_plugin.py",
    "validate_mcp_server.py",
    "validate_agent_trial.js",
    "validate_public_release.py",
    "build_link_first_assets.py",
    "validate_universal_entry.py",
    "validate_netlify_contract.py",
)


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def copy_file(source: Path, target: Path) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, target)


def copy_tree(source: Path, target: Path) -> None:
    shutil.copytree(
        source,
        target,
        ignore=shutil.ignore_patterns(
            ".DS_Store",
            "__pycache__",
            "*.pyc",
            "*.pyo",
            "*.pdf",
        ),
    )


def main() -> int:
    parser = argparse.ArgumentParser(description="Build a clean BunnyBook GitHub release directory")
    parser.add_argument("--target", type=Path, default=DEFAULT_TARGET)
    args = parser.parse_args()
    target = args.target.expanduser().resolve()
    root = ROOT.resolve()
    if target == root or root in target.parents and target.parent == root:
        # A direct child is allowed only for the default ignored dist/ directory.
        if target.parent.name != "dist":
            print("Refusing to build a public release over the source workspace.")
            return 1
    if target.exists():
        print(f"Refusing to overwrite existing target: {target}")
        return 1

    missing = [name for name in ROOT_FILES if not (ROOT / name).is_file()]
    missing += [name for name in DIRECTORIES if not (ROOT / name).is_dir()]
    missing += [f"scripts/{name}" for name in PUBLIC_SCRIPTS if not (ROOT / "scripts" / name).is_file()]
    if missing:
        print("Missing public release inputs: " + ", ".join(missing))
        return 1

    target.mkdir(parents=True)
    for relative in ROOT_FILES:
        copy_file(ROOT / relative, target / relative)
    for relative in DIRECTORIES:
        copy_tree(ROOT / relative, target / relative)
    copy_file(
        ROOT / "data" / "catalog" / "source_rights.csv",
        target / "data" / "catalog" / "source_rights.csv",
    )
    for name in PUBLIC_SCRIPTS:
        copy_file(ROOT / "scripts" / name, target / "scripts" / name)

    validation = subprocess.run(
        [sys.executable, str(target / "scripts" / "validate_public_release.py")],
        cwd=target,
        text=True,
        capture_output=True,
        check=False,
    )
    if validation.returncode:
        print(validation.stdout)
        print(validation.stderr, file=sys.stderr)
        print(f"Release was generated but failed validation: {target}")
        return validation.returncode

    rows = []
    for path in sorted(target.rglob("*")):
        if path.is_file() and path.name != "PUBLIC_RELEASE_MANIFEST.json":
            rows.append(
                {
                    "path": path.relative_to(target).as_posix(),
                    "bytes": path.stat().st_size,
                    "sha256": sha256(path),
                }
            )
    manifest = {
        "format_version": "1",
        "product": "BunnyBook Curriculum",
        "version": "0.3-full-alpha+universal-entry-2.1",
        "rights_holder": "lixiaozuyi",
        "license_map": {
            "database": "ODbL-1.0",
            "authored_content": "CC-BY-4.0",
            "software": "Apache-2.0",
            "brand": "all-rights-reserved",
        },
        "file_count": len(rows),
        "files": rows,
    }
    (target / "PUBLIC_RELEASE_MANIFEST.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(validation.stdout.rstrip())
    print(f"Public release ready: {target}")
    print(f"Files: {len(rows)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
