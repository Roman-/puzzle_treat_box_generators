# Puzzle treat box challenges

[PuzzleTreatBox](https://www.puzzletreatbox.com/) is a sturdy industrial safe secured with a large digit padlock. Each day, a child solves a puzzle challenge to reveal the 4-digit code, open the box, and claim a small reward inside.

![The box](puzzle_treat_box.jpg)

This repository contains js generators for these challenges.

## Generators
- Each generator allows creating and downloading an image on the canvas. The image encodes 4 digits.
- Canvas size (width and height) should be the first customization as two number inputs
- All other sizes, including margins, font size and line thickness, are relative: instead of fixed pixel the control should be range between 0 and some maximum value
- Changing any input value re-renders the canvas for instant preview
- The code input and some other controls have the 🎲 button to the right of it to randomize the value (and re-render instantly)
- Clicking the canvas downloads the .png image named like puzzle_name_XXXX, where XXXX is the code. It then changes the code to the random one and re-renders it.

## Generator page layout
- Minimal html code, no styles
- Canvas size controls
- The 4-digit code text input
- horizontal line
- Creativity controls
- "🎲 Randomize all" and "🔄 Restore defaults" button (only affects controls with 🎲 icon, including the code itself)
- horizontal line
- Canvas, with 1px grey border, cursor:pointer, title: click to download
