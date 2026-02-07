#!/usr/bin/env python3
"""Find puzzle directories that have a .png file but no README.md."""

import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main():
    pattern = re.compile(r"^\d+_")
    results = []

    for name in sorted(os.listdir(ROOT)):
        dirpath = os.path.join(ROOT, name)
        if not os.path.isdir(dirpath) or not pattern.match(name):
            continue

        has_readme = os.path.exists(os.path.join(dirpath, "README.md"))
        pngs = [f for f in os.listdir(dirpath) if f.lower().endswith(".png")]

        if pngs and not has_readme:
            results.append((name, pngs))

    if not results:
        print("All puzzle directories with .png files already have a README.md.")
        return

    print(f"Found {len(results)} directory(ies) with .png but no README.md:\n")
    for name, pngs in results:
        print(f"  {name}/")
        for png in sorted(pngs):
            print(f"    - {png}")


if __name__ == "__main__":
    main()
