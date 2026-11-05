# CLAUDE.md

These rules come from the repo owner (Ming Tsang), given during review sessions.
Follow them exactly. If a rule conflicts with a task, ask the owner.

## Project overview

Single-page CV site: React 18 + Vite + Mantine 6 + TypeScript.
Deployed to GitHub Pages (https://thm2320.github.io/ming-resume) by
`.github/workflows/deploy.yml` on push to `main`.

- CV content: `src/data/` - `introInfo`, `basicInfo`, `skills`, `jobExperience`,
  `certification`, `languages`, `awards` (re-exported by `src/data/index.ts`).
- Rendering: `src/components/`. Types: `src/types/`.
- Print mode: `src/contexts/print.ts` (`PrintContext`, `usePrintContext`).
- Tests: `test/` (vitest + happy-dom + Testing Library).

## Commands

- Install: `npm install` (CI uses `npm ci`)
- Dev server: `npm run dev`
- Build: `npm run build` (runs `tsc && vite build`)
- Lint: `npm run lint`
- Test: `npx vitest run` (`npm test` starts watch mode)
- Type-check: `npx tsc --noEmit`

Known failure: `test/components/AppHeader.spec.tsx` 'should show avatar when not
printing' fails because the avatar was removed. Ignore it unless the task is about it.

## Content honesty (most important)

- Never invent or inflate experience, employers, dates, numbers, percentages,
  currencies or skills.
- Every metric must come from the owner. If a number or claim was not provided,
  ask or leave it out. Do not guess.
- Do not claim real AWS deployment for the stock-viewer project. Its Terraform was
  only tested against Floci.
- Do not restore the removed Freelance job entry. It was not real experience.
  (`Freelance` in `src/types/jobExperience.type.ts` is only a type value.)
- Do not state why the last job ended.
- No availability line. This is the owner's choice.
- Keep skills unchanged unless told. Kubernetes, Python, GraphQL and Redis are
  kept on purpose.

## Formatting

- CV text must be ATS-safe: plain ASCII hyphens only. No arrows, en/em dashes or
  emojis. The pound sign is allowed where already used (e.g. `~£40k`).
- Dates use 3-letter month names (e.g. `Sep`).
- Bullets use the existing markdown format: `* **Title**: sentence.`
- Jobs are listed newest first.

## Workflow

- The parent agent of a new worktree does the planning. Once the plan is ready,
  spawn a sub agent to do the coding using `/orchestration` (not the Agent tool).
- Make the smallest change that satisfies the task. Touch nothing else.
- Leave commented-out code alone unless asked.
- Commit on a branch. Never push, open PRs or merge unless asked.
- Before reporting, run `npx tsc --noEmit`, `npm run build` and `npx vitest run`.
  Report failures as they are, including the known one above.
