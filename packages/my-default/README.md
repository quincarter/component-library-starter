# my-default

This is a short description of your component. Change me in [./src/my-default.ts](./src/my-default.ts#L6-42) in the JSDoc above the Component Class.

* Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
* Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
* For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)

## Installation
```bash
npm i -s @quincarter/my-default
```
or with `yarn`
```bash
yarn add @quincarter/my-default
```

## Imports
* if you just need the web component as-is
```javascript
import '@quincarter/my-default';
```
* If you need to rename the element for some reason, you can do this:
```javascript
import { MyDefault } from '@quincarter/my-default/MyDefault';

// then define the component yourself with a custom tag name
customElements.define('foo-my-tag-here-bar', MyDefault);
```

## Usage
```html
<my-default my-my-default-title="testing this attribute works">
</my-default>
```

## Properties

| Property         | Attribute          | Type     | Default             |
|------------------|--------------------|----------|---------------------|
| `myDefaultTitle` | `my-default-title` | `string` | "my-default works!" |
