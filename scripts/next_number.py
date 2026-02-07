#!/usr/bin/env python3
"""Find available directory numbers for new puzzles."""

import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def get_used_numbers():
    pattern = re.compile(r"^(\d+)_")
    nums = set()
    for name in os.listdir(ROOT):
        if os.path.isdir(os.path.join(ROOT, name)):
            m = pattern.match(name)
            if m:
                nums.add(int(m.group(1)))
    return nums


def main():
    used = get_used_numbers()
    if not used:
        print("No numbered directories found.")
        return

    max_num = max(used)

    gaps = sorted(set(range(max_num + 1)) - used)
    next_after = max_num + 1

    print(f"Used:  {sorted(used)}")
    print(f"Gaps:  {gaps if gaps else 'none'}")
    print(f"Next:  {next_after:02d}")


if __name__ == "__main__":
    main()
