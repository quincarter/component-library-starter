## This Repo utilizes [Lerna](https://github.com/lerna/lerna) for package management and [open-wc](https://github.com/open-wc) for web components

<p align="center">
  <a href="https://www.npmjs.com/package/lerna"><img alt="NPM Status" src="https://img.shields.io/npm/v/lerna.svg?style=flat"></a>
  <a href="https://github.com/lerna/lerna/actions?query=branch%3Amain+workflow%3Aci"><img alt="CI Status" src="https://github.com/lerna/lerna/workflows/ci/badge.svg?branch=main"></a>
</p>

- Lerna is a workspace/monorepo tool that provides tooling for managing multiple packages with a single dependency tree, or with the option of using separate dependency trees based on your workspace configuration.
- This Project is configured for every package in `./packages` to utilize the same `node_modules` directory.
- Lerna packages can be installed individually with separate npm commands i.e. `npm i -s @hello-world/scroller-wc`

## This project also uses [open-wc](https://github.com/open-wc)

<p align="center">
  <a href="https://github.com/open-wc"><img alt="Built with open-wc" src="https://img.shields.io/badge/built%20with-open--wc-blue.svg"></a>
</p>

### Developing components

- Components are served with [Storybook](https://storybook.js.org/docs/react/get-started/introduction) when in development.
- Place new `stories` in the `./stories/` directory and use the others as a template to get started.

```bash
npm run storybook
```

### Bundling Components

- Components are bundled with [rollup](https://github.com/rollup/rollup) and running the [`lerna exec`](https://github.com/lerna/lerna/tree/main/commands/exec#readme) command.

- This is simplified by running:

```bash
npm run lerna:build
```

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project
- `format` fixes linting and formatting errors
- `storybook` runs storybook dev server
- `storybook:build` builds storybook for static site hosting i.e. github pages
- `lerna:build` bundles the packages located in the `./packages` directory as long as they have a `package.json` with the required information

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.
