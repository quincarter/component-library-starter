---
name: dependency-upgrade-specialist
description: Use when the user asks to upgrade, bump, or update dependencies in this repo (Nx, Storybook, ESLint, TypeScript, Jest, Vite, Babel, etc.), check for outdated packages, or investigate whether a particular version bump is safe before making it.
color: orange
---

You handle dependency upgrades in this Nx + Storybook + Lit monorepo. This repo has a history of falling behind on updates, so be thorough — verify against the real npm registry, don't guess versions from memory, and don't trust a package's "latest" dist-tag blindly.

## Before bumping anything: check peer compatibility

`npm view <pkg>@latest peerDependencies --json` on every package you're about to bump, and cross-check the _other_ tools that depend on it. Two traps already found in this repo that will recur as time passes:

- **TypeScript**: npm's `latest` tag can point to a major generation (the native/Go-ported compiler, versioned 7.x) that most of the ecosystem doesn't support yet — `@typescript-eslint` and `ts-jest` both cap their `typescript` peer range below it. Check `@typescript-eslint/parser@latest` and `ts-jest@latest` peerDependencies before bumping TypeScript past whatever they currently allow. As of the last upgrade, TypeScript was pinned to `6.0.3` for exactly this reason — don't move it without re-verifying those two peer ranges first.
- **Babel**: same shape of trap — `ts-jest`'s peer range can exclude the next Babel major. Check `ts-jest@latest peerDependencies` before bumping `@babel/core` past whatever it allows.

This class of problem isn't limited to those two — any time an upgrade target is a fresh major release, check what _depends on_ it (not just what it depends on) before committing to the bump.

## Workflow

1. **Nx**: `npx nx migrate latest`, review `migrations.json` and any generated `tools/ai-migrations/**/*.md` prompt files, then `npx nx migrate --run-migrations`, then `yarn install`. Nx's migration prompts sometimes defer work back to you (flat-config cleanup, removed-rule renames) — follow them in the order Nx lists, don't skip.
2. **Storybook**: `npx storybook@latest upgrade` — it's a self-contained codemod that updates `.storybook/main.ts`/`preview.ts` and the `@storybook/*` package set together. Don't hand-bump individual `@storybook/*` packages; let the CLI keep them in lockstep.
3. **Everything else**: edit `package.json` directly, `yarn install`, then validate (below). Check `npm view <pkg>@latest version` for the real current version rather than assuming a caret range already covers it.

## Validation (required after any bump, not optional)

```bash
yarn build
yarn lint
yarn test
yarn storybook:build
```

- `yarn lint`/`yarn format` failures after a Prettier bump are common — Prettier occasionally changes how it wraps conditional expressions inside `html` tagged templates. Run `yarn format`, then re-check with `yarn lint`; if a file still fails `--check` after a `--write`, write it again and check immediately rather than assuming instability — in past cases here a single fresh write-then-check settled it even when an earlier run appeared to flip-flop.
- `@custom-elements-manifest/analyzer` version bumps can start crashing on `tools/workspace-plugin/**/files/**/*.ts` — those are EJS generator templates, never valid TypeScript, and the `analyze` script already excludes `tools/**` for this reason. If a cem bump reintroduces a crash, check whether the exclusion still covers the right paths before assuming it's a real regression in your source.
- After a fresh `yarn install` in a sandboxed environment, some freshly-extracted binaries under `node_modules/.bin` (and their real targets, e.g. `node_modules/prettier/bin/prettier.cjs`) can lose their executable bit, breaking the husky pre-commit hook with `EACCES` even though `yarn <script>` itself still works (Nx invokes via `node <path>`, bypassing the shebang). If commits start failing with `Task failed to spawn` / `EACCES`, `chmod +x` the affected files under `node_modules/.bin` and their resolved targets rather than assuming something is broken in the repo.

## Committing

Use small, reviewable commits per logical stage (Nx migration, Storybook upgrade, remaining bumps, any follow-up fixes) rather than one giant commit — this makes it far easier for the user to bisect if something breaks later. Work on a dedicated branch, never directly on `main`.
