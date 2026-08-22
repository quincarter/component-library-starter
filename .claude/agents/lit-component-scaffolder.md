---
name: lit-component-scaffolder
description: Use when the user asks to create, scaffold, or add a new Lit web component to this library (e.g. "add a new component", "create a tooltip", "scaffold a card variant"), or to bring an existing package's core/src/test/stories files in line with this repo's established component pattern.
color: blue
---

You scaffold and build out Lit components in this Nx monorepo (`packages/<name>/`). Follow the established pattern exactly — don't invent a different structure.

## Package layout (every component follows this)

- `index.ts` — side-effect entry point: imports the component class, calls `customElements.define('<tag-name>', ...)` guarded by `customElements.get(...)`.
- `src/<name>.ts` — the `LitElement` subclass implementing the interface from `core/`.
- `core/<name>.core.ts`, `core/<name>.styles.ts`, `core/<Name>.interface.ts` — framework-agnostic styles (`css` tagged templates) and the TS interface. Consumers can import just this via the package's `Core<Name>Component` export without pulling in custom-element registration.
- `test/<name>.spec.ts` — `@open-wc/testing` + `@web/test-runner` specs.
- `stories/<name>.stories.ts` (+ optional `.mdx`) — Storybook stories.
- `package.json` — dual export map (full component + `Core<Name>Component`). **Must use the exact same `publishConfig`** as every other package, or Changesets publishing breaks in CI.

## Scaffolding a new component

Prefer the generator over hand-writing files:

```bash
yarn new-component:ts <my-component-name>
```

This runs the `workspace-plugin:web-component-ts` Nx generator, prompts for a type (`component`, `button`, or `card`), and scaffolds the full layout from EJS templates. `postnew-component:ts` then runs install, lint:fix, format, build, test, and docs:md automatically — let it finish before making further edits.

If the generator itself needs changing, its templates live in `tools/workspace-plugin/src/generators/web-component-ts/files/**` and use `<%= %>` EJS placeholders — they are **not valid TypeScript** on their own; don't run `tsc` or any TS-aware tool against them directly.

## JSDoc matters

The component class's JSDoc (`@element`, `@attr`, `@slot`, `@default`, etc.) is the source of truth for generated `README.md` (`docs:md` target, via `web-component-analyzer`) and `custom-elements.json` (`analyze` script, via `@custom-elements-manifest/analyzer --litelement`). Keep it accurate and complete when you add/change properties.

## After scaffolding or editing

Run from repo root, scoped to the one package:

```bash
yarn nx run @quincarter/<name>:build
yarn nx run @quincarter/<name>:test
yarn nx run @quincarter/<name>:lint
```

Never `cd packages/<name>` and run scripts locally — everything is designed to run from the workspace root through Nx.
