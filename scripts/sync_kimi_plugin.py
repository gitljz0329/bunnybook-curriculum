# SPDX-License-Identifier: Apache-2.0

from __future__ import annotations

import hashlib
import json
import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PLUGIN_ROOT = ROOT / "integrations" / "kimi" / "bunnybook"
SYNC_MANIFEST = PLUGIN_ROOT / "sync-manifest.json"

SOURCE_MAP = (
    (ROOT / "agent_runtime" / "mcp_server.py", PLUGIN_ROOT / "runtime" / "mcp_server.py"),
    (
        ROOT / "agent_runtime" / "curriculum_source.py",
        PLUGIN_ROOT / "runtime" / "curriculum_source.py",
    ),
    (ROOT / "mvp" / "learning-map.json", PLUGIN_ROOT / "mvp" / "learning-map.json"),
    (
        ROOT / "mvp" / "agent-manifest.json",
        PLUGIN_ROOT / "mvp" / "agent-manifest.json",
    ),
    (ROOT / "LICENSE.md", PLUGIN_ROOT / "LICENSE.md"),
    (ROOT / "NOTICE", PLUGIN_ROOT / "NOTICE"),
    (
        ROOT / "THIRD_PARTY_NOTICES.md",
        PLUGIN_ROOT / "THIRD_PARTY_NOTICES.md",
    ),
    (ROOT / "TRADEMARKS.md", PLUGIN_ROOT / "TRADEMARKS.md"),
    (ROOT / "CITATION.cff", PLUGIN_ROOT / "CITATION.cff"),
    (
        ROOT / "LICENSES" / "ODbL-1.0.txt",
        PLUGIN_ROOT / "LICENSES" / "ODbL-1.0.txt",
    ),
    (
        ROOT / "LICENSES" / "CC-BY-4.0.txt",
        PLUGIN_ROOT / "LICENSES" / "CC-BY-4.0.txt",
    ),
    (
        ROOT / "LICENSES" / "Apache-2.0.txt",
        PLUGIN_ROOT / "LICENSES" / "Apache-2.0.txt",
    ),
)


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def relative(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


def main() -> int:
    missing = [relative(source) for source, _ in SOURCE_MAP if not source.is_file()]
    if missing:
        print(
            json.dumps(
                {"status": "failed", "missing_canonical_files": missing},
                ensure_ascii=False,
                indent=2,
            )
        )
        return 1

    files: list[dict[str, object]] = []
    for source, target in SOURCE_MAP:
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
        files.append(
            {
                "source": relative(source),
                "target": target.relative_to(PLUGIN_ROOT).as_posix(),
                "sha256": sha256(source),
                "bytes": source.stat().st_size,
            }
        )

    payload = {
        "format_version": "1",
        "notice": "Generated copies; edit the canonical source files, then run scripts/sync_kimi_plugin.py.",
        "files": files,
    }
    SYNC_MANIFEST.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(
        json.dumps(
            {
                "status": "ok",
                "plugin_root": relative(PLUGIN_ROOT),
                "synced_files": len(files),
                "files": files,
            },
            ensure_ascii=False,
            indent=2,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
