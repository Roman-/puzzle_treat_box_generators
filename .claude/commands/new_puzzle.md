A raw idea is provided in this prompt. Build around it to create the 3 variations of the new puzzle.

## steps to follow
- Create the new (next) directory, e.g. 42_puzzle_name
- Create `planning` subdirectory: 42_puzzle_name/planning
- Create planning/initial_description.md with the initial description of the puzzle from user input.
- Think of the puzzle structure, mechanics and overall look based on the description. Because the user input was rough and imprecise, and can be interpreted in different ways, create three possible interpretations of how this raw description can be turned into a puzzle that follows all the guidelines from the README. Create planning/interpretation_1.md, planning/interpretation_2.md, planning/interpretation_3.md.
- Look at each planning/interpretation_X.md individually. Argue with everything described in it, providing a comprehensive proof that the puzzle description written in it will contradict the guidelines. Output the result in planning/interpretation_critique_X.md
- Look at each planning/interpretation_critique_X.md. Based on it, come up with improved comprehensive plan for a puzzle. Write it in planning/final_plan_X.md.
- For each planning/final_plan_X.md, create a separate html/js page in puzzle root directory, named: index_v1.html, index_v2.html, index_v3.html
