# Pranjal Tushar Navgale — Portfolio

A single-page static portfolio (HTML, CSS, vanilla JavaScript). No framework and no npm dependencies.

## Run locally
Option A: double-click `index.html`.
Option B: `npm run build` then `npm start` (serves the `dist/` folder).

## Edit content
Open `index.html` and search for `PORTFOLIO DATA`. Profile, links, experience, projects,
skills and achievements are all in that one `DATA` object.
- Add a project link: fill `links.github` / `links.live` for that project.
- Add "What I learned" to a project: fill its `learnings` array.

## Deploy
Push to GitHub, import the repo on Vercel, click Deploy. `vercel.json` already configures the build.
