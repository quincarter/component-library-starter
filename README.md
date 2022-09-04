## This Repo utilizes [Nx](https://nx.dev) for package management and [open-wc](https://github.com/open-wc) for web components

## This project uses [open-wc](https://github.com/open-wc) for scalable, small, lightweight web component development

### Developing components

Run this to start and install dependencies:

```bash
yarn
```

## Generating Components
#### New JS Component:

```bash
yarn run new-component:js
```
#### OR this will also work
```bash
yarn run new-component:js my-component-name
```

#### New TypeScript Component
```bash
yarn run new-component:ts
```
#### OR this will also work
```bash
yarn run new-component:ts my-component-name
```

## Storybook/Development
### Components are served with [Storybook](https://storybook.js.org/docs/react/get-started/introduction) when in development.

View your components in storybook here:

```bash
yarn start
```

### Bundling Components

- Components are bundled with [rollup](https://github.com/rollup/rollup) and running the following nx command.

- This is simplified by running:

```bash
yarn run build
```

### Package Linking
- Simply running `yarn` will link all of packages together utilizing the yarn workspace

# Scripts

This project uses `yarn` for package management and dependencies. All scripts are defined for the components in the `./tools/generators/web-component*/package.json` for JS and TS components. If you want to add any additional scripts prior to starting your project, add them there so that they can utilize `Nx` and run with the rest of the project. 

Scripts should not be run on the smaller package level. Everything in this project is designed to be run from the project root. 

Scripts can be cached as well (see below) for faster times in a pipeline or in local project builds.

All scripts must start with a run command like this:
```bash
yarn run <script name>
```

You can also just run `yarn run` and it will ask you which script you would like to run from a list. 
## Main Scripts
- `start` runs your app for development, reloading on file changes and using Storybook
- `storybook:build` builds storybook for static site hosting i.e. github pages

### Cacheable Scripts (will run faster if no changes have been made)
- `build` builds your app and outputs it in your `dist` directory on each `package` utilizing `Nx`
- `test` runs the test command on each `package` utilizing `Nx` and generates test coverage for each one.
- `lint` runs the linter for each `package` with the --check flag utilizing `Nx`
- `lint:fix` runs the linter for each `package` with the --fix flag utilizing `Nx`
- `format` fixes linting and formatting errors with `prettier` for each `project` utilizing `Nx`
## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.
