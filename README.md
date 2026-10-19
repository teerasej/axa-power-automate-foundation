# Power Automate Foundation

English learner exercises for AXA's Foundation session. Editable learner content lives in `docs/`.

Public site: https://teerasej.github.io/axa-power-automate-foundation/

## Local preview

```sh
npm ci
npm run docs:dev
```

For a production preview, run `npm run docs:build`, then `npm run docs:preview`.
The local base defaults to `/`. GitHub Actions sets `SITE_BASE=/axa-power-automate-foundation/` when building for Pages. Pushes to `main` run the Pages deployment workflow.

Start with `docs/index.md`. Public PDF and text downloads live in `docs/public/downloads/`.
The homepage links to the 37-page teaching PDF, excluding hidden slides and speaker notes.
Keep facilitator notes, answer keys, account details, supplied card artwork and editable presentations outside this repository.
