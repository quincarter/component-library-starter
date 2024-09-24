# my-side-nav

This is a short description of your component. Change me in [./src/my-side-nav.ts](./src/my-side-nav.ts#L6-42) in the JSDoc above the Component Class.

* Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
* Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
* For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)

## Installation
```bash
npm i -s

## Properties

| Property   | Attribute   | Type                      | Description                                      |
|------------|-------------|---------------------------|--------------------------------------------------|
| `navLinks` | `nav-links` | `NavLinks[] \| undefined` | List of links and their children for the side navigation |

## Methods

| Method               | Type                                   | Description                                      |
|----------------------|----------------------------------------|--------------------------------------------------|
| `renderSideNavLinks` | `(): TemplateResult<1>[] \| undefined` | Renders the side nav links passed into the .navLinks object |
