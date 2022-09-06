## This Repo utilizes [Nx](https://nx.dev) for package management and [open-wc](https://github.com/open-wc) for web components

## This project uses [open-wc](https://github.com/open-wc) for scalable, small, lightweight web component development

### Developing components

Run this to start and install dependencies:

```bash
yarn install
```

#### This library uses Changesets for publishing to npm and Changelogs in each package
* For commands and other info, see: [Changesets README.md](./.changeset/README.md)
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
- Simply running `yarn link` will link all of packages together utilizing the yarn workspace symlinking strategy

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
# Tooling and Extensions

Tooling for this project should be fairly straightforward. Most users can get going quickly. If you are using VS Code, you can install a few of these Extensions and it may make your life easier working with [Nx](https://nx.dev) and [Lit Element](https://lit.dev).

## VS Code Extensions

### Recommended Extensions
* Lit Element Extensions. I have all of these and they make my life much easier developing components in VS Code.
  * [Lit Snippets](https://marketplace.visualstudio.com/items?itemName=lit.lit-snippets) - Great for quickly scaffolding a component boilerplate
  * [lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html) - This is one that provides some syntax highlighting and intellisense for html inside of lit element. Very useful so it doesn't just look like a long template string. 
  * [lit-plugin](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin) - This one provides more syntax highlighting outside of the html syntax.
* Formatting and Code normalization - Most of these are installed by default but ensure you have them
  * [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatting
  * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Linting visualization in the editor
### Optional
* [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) - Great for executing workspace commands. This project is setup to simplify these commands with built in `package.json` scripts. If you want this, use it at your own risk. 
* [Ayu Mirage Color Scheme](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu) - An easy on the eyes color scheme for VS Code that makes code much more pleasant to look at.
* [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) - Colorful icons that give your VS Code some character
