# Repository Guidelines

## Project Structure & Module Organization
`src/` contains the application and library-facing code. Use `src/components/` for reusable Vue 2 components, `src/components/stories/` and `src/**/*.stories.js` for Storybook stories, and `src/views/` for route-level pages such as the home and about screens. Routing lives in `src/router/`, shared global styles in `src/style.css`, and SCSS variables in `src/styles/`. Static assets belong in `public/` or colocated under `src/assets/` and `src/stories/assets/`. Storybook configuration is in `.storybook/`, and implementation notes live in `doc/`.

## Build, Test, and Development Commands
Use `pnpm` for all local work.

- `pnpm dev`: start the Vite development server.
- `pnpm build`: create a production build in `dist/`.
- `pnpm preview`: serve the production build locally.
- `pnpm storybook`: run Storybook on port `6006`.
- `pnpm build-storybook`: generate the static Storybook site.

Run `pnpm build` before submitting changes. For component work, also verify the affected stories in Storybook.

## Coding Style & Naming Conventions
Follow the existing Vue 2 Single File Component style: 2-space indentation, semicolon-free JavaScript, and one component per `.vue` file. Name reusable components in PascalCase, for example `MyButton.vue`; use matching story names such as `MyButton.stories.js`. Route views should use `*View.vue`, for example `HomeView.vue`. Keep CSS class names descriptive and flat (`site-header`, `story-card__label`), and prefer colocated assets over deep shared folders unless reuse is clear.

## Testing Guidelines
There is no dedicated unit test runner configured yet. Current validation is build- and Storybook-based:

- run `pnpm build` to catch compile-time issues
- run `pnpm storybook` to verify component states and docs
- keep story files updated when component APIs or visuals change

If you add automated tests later, place them near the feature and document the command in `package.json`.

## Commit & Pull Request Guidelines
The current history uses Conventional Commits, for example `feat: add vue router and redesign pages`. Continue with prefixes such as `feat:`, `fix:`, and `docs:`. Keep each commit scoped to one logical change.

Pull requests should include a short description, impacted paths, validation performed (`pnpm build`, Storybook review), and screenshots for UI changes. Link related issues when applicable.

## Configuration Notes
This repository is pinned to Vue 2.7 and Storybook 7. Do not upgrade to Storybook 8+ without a full compatibility plan, because Vue 2 support is no longer maintained there.
