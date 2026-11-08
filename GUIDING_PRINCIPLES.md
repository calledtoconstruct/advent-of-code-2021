# Guiding principles: calledtoconstruct/advent-of-code-2021

## Purpose and scope
JavaScript (ES modules) solutions to the Advent of Code 2021 puzzles, days 01 to 11.

## Stack and layout
Node.js with `.mjs` modules. Each day is `NN.mjs` with `NN.data` and `NN.sample.data` at the root; specs are `test/NN.spec.mjs` (Mocha + expect.js). `package.json` has no scripts.

## Commands
| Check | Command | Evidence |
|---|---|---|
| Setup | `npm install` | README.md |
| Build | Not applicable (plain ES modules) | - |
| Type-check / lint | None configured | package.json |
| Changed-feature tests | `npx mocha test/NN.spec.mjs` for the day you changed (Mocha accepts a spec path) | README.md, test/ |
| Full suite | `npx mocha` (the README's way to run all solutions) | README.md |
| CI | None: no workflow files | repository tree |

Commands marked as not written down come from the build files, not from project docs; confirm them before relying on them.

## Before every push
Before every push: run the build and type-check/lint that exist here, plus only the tests for the files or feature you changed (team rule, ideas #14 note 6797). Do not run the full suite locally as a routine gate; this repository has no CI that runs the full suite, so run the full suite only when the change is broad, and say in the PR that CI coverage is missing. Merge needs a positive review. Explain any new failure your change caused. Never weaken a valid test to make it pass, and never invent a command this file does not list.

## Project rules
- Keep the per-day file pattern: `NN.mjs`, `NN.data`, `NN.sample.data`, `test/NN.spec.mjs`.
- Specs should check the sample data answer before the real input.
- Do not change another day's data or solution in the same change.

## What to avoid
- Committing to the default branch; work on a branch and open a pull request.
- Deleting files, branches or history, or changing repository settings.
- Adding tooling, CI or dependencies that the change does not need.
- Rules copied from other projects (file-size limits, clocks, quotas) that this repository never adopted.

## Delivery and safety
- Nothing is deployed or released.

## Open questions
- There is no CI, so the local full `npx mocha` run is the only full check; keep it quick.

## Sources
Read from the `main` branch on 2026-11-08 ET: `README.md`, `package.json`, `test/`, repository tree.

## Instruction updates
Check `guiding-principles.version` at the start of each turn and when you enter this project; reload this file when the version changes. Change this file, its version and date, and `PRINCIPLES_HISTORY.md` in the same commit. Team-wide role instructions are versioned separately in the team-process repository.
