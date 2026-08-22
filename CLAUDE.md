# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

An Nx monorepo template for building a Lit Element web component library, following [open-wc](https://github.com/open-wc) standards. Each component lives in `packages/*` as its own publishable npm package (scoped `@quincarter/*`). Storybook is the dev/prototyping surface; `@web/test-runner` + `@open-wc/testing` run the tests in a real browser (Chrome via Playwright); Changesets handles versioning/publishing.

**Dependency policy:** keep the toolchain close to latest, but TypeScript and Babel are deliberately capped below npm's `latest` tag. TypeScript's `latest` (7.x) is the new native/Go compiler and isn't yet supported by `@typescript-eslint` or `ts-jest`'s peer ranges — pin to the newest version those two still accept (`6.0.3` as of the last check). `@babel/core` and its presets are capped the same way, one major behind, for the same `ts-jest` peer-range reason. Don't bump either past those lines without re-checking peer compatibility first (`npm view <pkg>@latest peerDependencies`).

## Commands

All commands run from the repo root — **never** run scripts from inside `packages/*`; everything is designed to be invoked through Nx at the top level.

```bash
yarn install                 # install + symlink workspace packages
yarn build                   # nx run-many --target=build (tsc per package)
yarn test                    # nx run-many --target=test (@web/test-runner, per package)
yarn lint                    # nx run-many --target=lint (eslint + prettier --check)
yarn lint:fix                # same, with --fix
yarn format                  # eslint + prettier --write, per package
yarn start                   # build, then tsc --watch + Storybook dev server together
yarn storybook                # Storybook dev server only, port 6006
yarn storybook:build          # regenerate custom-elements.json, then static Storybook build
yarn new-component:ts <name>  # Nx generator: scaffold a new component package (prompts for type if name omitted)
yarn changeset:add            # stage a changeset, then version packages
```

Run a single package's target directly with Nx instead of the aggregate scripts:

```bash
yarn nx run @quincarter/notification-banner:test
yarn nx run @quincarter/notification-banner:build
yarn nx run @quincarter/notification-banner:lint
```

Nx caches `build`, `test`, `lint`, `lint:fix`, and `format` (see `targetDefaults` in [nx.json](nx.json)) — reruns with no relevant changes are instant.

## Architecture

### Per-package layout (`packages/<name>/`)

Every component package follows the same shape, produced by the `web-component-ts` Nx generator:

- `index.ts` — the package's `main` entry. Side-effect-only: imports the component class and calls `customElements.define('<tag-name>', ...)` guarded by `customElements.get(...)`.
- `src/<name>.ts` — the `LitElement` subclass (the actual custom element), implementing the interface from `core/`.
- `core/<name>.core.ts`, `core/<name>.styles.ts`, `core/<Name>.interface.ts` — the framework-agnostic pieces: styles (`css` tagged templates) and the TypeScript interface the component implements. This split exists so consumers can import just the interface/styles (via the package's `CoreXComponent` export) without pulling in the full custom-element registration.
- `test/<name>.spec.ts` — `@open-wc/testing` + `@web/test-runner` specs, run in a real Chrome instance.
- `stories/<name>.stories.ts` (+ optional `.mdx` docs page) — Storybook stories, picked up by the root `../packages/**/stories/*.stories.@(js|jsx|ts|tsx|mdx)` glob in [.storybook/main.ts](.storybook/main.ts).
- `package.json` — dual export map: the default export is the full web component (side-effect import), and a second `Core<Name>Component` export exposes just the interface/styles. Every package must use the **exact same `publishConfig`** or Changesets publishing breaks in CI (see README).

JSDoc on the component class (`@element`, `@attr`, `@slot`, etc.) is the source of truth for `README.md` generation via `web-component-analyzer` (`docs:md` target) and for `custom-elements.json` via `@custom-elements-manifest/analyzer` (`analyze` script, litelement mode).

### Generating a new component

`yarn new-component:ts` runs the `workspace-plugin:web-component-ts` Nx generator ([tools/workspace-plugin/src/generators/web-component-ts](tools/workspace-plugin/src/generators/web-component-ts)), which prompts for a component type (`component`, `button`, or `card`) and scaffolds the full layout above from EJS templates in `.../web-component-ts/files/**`. After generation, `postnew-component:ts` runs install, lint:fix, format, build, test, and docs:md automatically.

The `.../files/**/*.ts` templates use `<%= %>` EJS placeholders and are **not valid TypeScript on their own** — don't run `tsc` or the custom-elements analyzer against `tools/**` directly (the `analyze` script already excludes it via `--exclude dist tools/**`). Note: `nx build workspace-plugin` currently fails because `tsconfig.lib.json` includes these template files unconditionally — this is a known pre-existing gap, not something to "fix" incidentally while working on something else.

### ESLint config

[eslint.config.mjs](eslint.config.mjs) is a flat config, but uses Nx's own sugar syntax (`overrides`/`extends` keys inside a flat-config object) rather than plain ESLint flat-config syntax — this is intentional and understood by the `@nx/eslint:lint` executor, not a bug.

### Nx project graph

Projects are `@quincarter/*` (the 5 packages under `packages/`) plus the untagged `workspace-plugin` (the Nx generator/plugin under `tools/`). Root-level `build`/`test` scripts filter to `--projects="@*/*"`, which is why `workspace-plugin` is never included in `yarn build`/`yarn test`/`yarn lint` — it has to be targeted directly with `yarn nx run workspace-plugin:<target>`.

### Publishing

Changesets (`yarn changeset:add`) drives versioning and changelogs per package. `publish:local` and the Verdaccio Docker setup (`yarn verdaccio`) exist for testing a full publish flow against a local registry before pushing to the real one.
