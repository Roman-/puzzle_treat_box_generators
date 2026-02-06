The user, apart from this command, specifies the specific puzzle (path to html page) to work on. Try to understand clearly the mechanics of the puzzle and only work in its path.
If the path or the puzzle is not specified, report it and finish.

Once you're in puzzle dir, delete the planning/*.md documents.

The specified puzzle contains some major issues, and the rough description of the issues are provided.

Your job is to understand thoroughly the puzzle mechanics and the way it is displayed, as well as the issues described, and extrapolate on the issues to find everything that can go wrong with the puzzle and everything that contradicts the guidelines from README.md.
Based on that, create a document planning/issues.md (delete previous if exists) in the puzzle directory.
Then create planning/issues_resolution.md (delete previous if exists), in which you brainstorm the ideas on how to mitigate the issues from the first principles.
This may require things from simple local tweaks to rethinking the puzzle mechanics from scratch. Write all of the ideas in this document that can lead to improving the puzzle and mitigating the issues described, preventing them from appearing in the future. Write at least 15 proposals and solutions of different degree of simplicity and creativity.
Finally, create planning/issues_final_resolution.md, where you get the best proposals that solve all of the issues described, and potentially can solve other derived issues.
Then implement planning/issues_final_resolution.md.

## clean up
Delete .md files from planning/*.md
