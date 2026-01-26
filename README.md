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

## Examples - 1234

Click any image below to explore the generator and example output. All examples encode 1234.

[![Circles in grid](01_count_filled_circles_in_grid/count_circles_1234.png)](01_count_filled_circles_in_grid/)
[![Missing digit grid](04_missing_digit_grid_match/example.png)](04_missing_digit_grid_match/)
[![Bar chart](03_bar_chart/bar_chart_1234.png)](03_bar_chart/)
[![Colored circles](02_count_filled_circles_with_color/count_circles_color_1234.png)](02_count_filled_circles_with_color/)
[![Words Spelled Out](04_words_spelled_out_custom_font/use_this_pic.png)](04_words_spelled_out_custom_font/)
[![Color sequence circles](07_color_sequence_circles/example.png)](07_color_sequence_circles/)

## Shared utilities

The `shared/` directory contains reusable code for puzzle generators:
- `colors.js` - 10 distinct, visually distinguishable colors (no white) mapped to digits 0-9
- `sequences.js` - Pattern-based sequence generation for creating repeating patterns
