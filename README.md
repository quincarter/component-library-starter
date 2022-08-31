## This Repo utilizes [Nx](https://nx.dev) for package management and [open-wc](https://github.com/open-wc) for web components

## This project uses [open-wc](https://github.com/open-wc) for scalable, small, lightweight web component development

### Developing components

Run this to start and install dependencies:

```bash
yarn
```

- Components are served with [Storybook](https://storybook.js.org/docs/react/get-started/introduction) when in development.
- Generate a new Component by running this command:

```bash
npx nx workspace-generator web-component
```

View your components in storybook here:

```bash
yarn start
```

### Bundling Components

- Components are bundled with [rollup](https://github.com/rollup/rollup) and running the following nx command.

- This is simplified by running:

```bash
yarn nx run-many --target=build
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

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.