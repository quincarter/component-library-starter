# Component Library Starter

## This Repo utilizes [Nx](https://nx.dev) for package management and [Lit Element](https://lit.dev) + [open-wc standards](https://github.com/open-wc) for scalable, small, lightweight web component development

### Who is this for?
If you are someone looking to build out some kind of component library with Lit components, this should help you get started. A lot of the setup work has been done for you here, but you can choose to use this, or modify it as needed. I tried to follow similar patterns I have seen across multiple component libraries when I put this together.

### What's included
- Lit for authoring components
- Storybook for prototyping/testing/sandboxing your components
- TypeScript is key here, But ships JS and TS assets when compiled with `tsc`. 
- Web Test Runner for unit testing
- Nx - if you have never used Nx before, it is a Monorepo management tool.
- Changesets for publishing and managing versioning of nested packages in a monorepo
- Markdown doc generation with the web-component-analyzer and JSDoc Parsing
- Nx Generator for generating a base component to start off that is tested and storybook-ready for development

### What else?

- Packages are pre-configured for publishing to an internal company registry, or to npm. 
- Published Files are pre-configured and pretty fleshed out to only publish the assets you need, but that can be adjusted as needed. 
- Tooling is pretty fleshed out as well with some nice linter rules and quality of life adjustments, but that can also be adjusted as needed.
- This project uses `yarn` but you can use `npm`, at the time when i built this, npm didn't have a good handle on workspaces like `yarn` did and i still enjoy yarn over npm.

### Developing components

Run this to start and install dependencies:

```bash
yarn install
```

#### This library uses Changesets for publishing to npm and Changelogs in each package

- For commands and other info, see: [Changesets README.md](./.changeset/README.md)
- Commands are simplified by running `yarn changeset:add` to stage the change to be published.
  - Changesets uses the `publishConfig` key on the package.json for the destination registry/publish location.
  - **All `package.json` files must have the _exact_ same publishConfig value or changesets may fail to publish in a CI environment.**

## Generating Components

#### New TypeScript Component

```bash
yarn new-component:ts
```

#### OR this will also work

```bash
yarn new-component:ts my-component-name
```

**[postnew-component:ts](./package.json#L22) script will run after component is successfully created, adding it to all of the cached operations.**

## Storybook/Development

### Components are served with [Storybook](https://storybook.js.org/docs/react/get-started/introduction) when in development.

View your components in storybook here:

```bash
yarn start
```

### Bundling Components

- Components are bundled with tsc and running the following nx command.

```bash
yarn nx run-many --target=build
```

- This is simplified by running:

```bash
yarn build
```

### Package Linking

- Simply running `yarn install` will link all of packages together utilizing the yarn workspace symlinking strategy. Yarn makes this very easy compared to npm.

# Scripts

This project uses `yarn` for package management and dependencies.

## Generator Scripts

All scripts are defined for the components in the `./tools/generators/web-component-ts/package.json` for TS components.

If you want to add any additional scripts prior to starting your project, add them there so that each newly generated package can utilize `Nx` and run with the rest of the project.

### Package level scripts

- Package level, or component level scripts must be named the same across all packages to utilize the Nx functionality to manage packages from the highest level for the most ease.
- As an example, if you wanted to include a bundler in your scripts, you would do something like this on the package level:

```json
"scripts": {
  "bundle-my-code": "rollup -c",
}
```

### Root level scripts

- Root level scripts can be configured however you want to manage certain functions. Most commonly with Nx, you will want to use the same commands across multiple packages and execute them with a single command.
- If you configured the above script on multiple packages, to run it you would simply configure your top level script to be like this:

```json
"scripts": {
  "bundle": "yarn nx run-many --target=bundle-my-code",
}
```

- You would execute that by running this command from the project root:

```bash
yarn bundle
```

**Scripts should not be run on the smaller package level. Everything in this project is designed to be run from the project root.**

### Script Caching

Scripts can be cached as well (see below) for faster times in a pipeline or in local project builds.

All scripts must start with a run command like this:

```bash
yarn <script name>
```

- To add your nested package script to a Cacheable item, you would add your script name to the `targetDefaults` Object in the [nx.json](./nx.json#L8);

```json
"targetDefaults": {
    "test": {
      "inputs": ["default", "^default", "{workspaceRoot}/jest.preset.js"],
      "cache": true
    },
    "lint": {
      "inputs": ["default", "{workspaceRoot}/.eslintrc.json"],
      "cache": true
    },
    "build": {
      "cache": true
    },
    "format": {
      "cache": true
    },
    "lint:fix": {
      "cache": true
    },
}
```

You can also just run `yarn` and it will ask you which script you would like to run from a list.

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

- Lit Element Extensions. I have all of these and they make my life much easier developing components in VS Code.
  - [Lit Snippets](https://marketplace.visualstudio.com/items?itemName=lit.lit-snippets) - Great for quickly scaffolding a component boilerplate
  - [lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html) - This is one that provides some syntax highlighting and intellisense for html inside of lit element. Very useful so it doesn't just look like a long template string.
  - [lit-plugin](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin) - This one provides more syntax highlighting outside of the html syntax.
- Formatting and Code normalization - Most of these are installed by default but ensure you have them
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatting
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Linting visualization in the editor

### Optional

- [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) - Great for executing workspace commands. This project is setup to simplify these commands with built in `package.json` scripts. If you want this, use it at your own risk.
- [Ayu Mirage Color Scheme](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu) - An easy on the eyes color scheme for VS Code that makes code much more pleasant to look at.
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) - Colorful icons that give your VS Code some character
- [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) - Colorizes your VSCode windows. Great for those of us that have 15 windows open at a time. Assign a color and recognize that code window immediately.
