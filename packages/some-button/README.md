# some-button

This is a short description of your component. Change me in [./src/some-button.ts](./src/some-button.ts#L9-39) in the JSDoc above the Component Class.

* Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
* Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
* For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)

## Installation
```bash
npm i -s @quincarter/some-button
```
or with `yarn`
```bash
yarn add @quincarter/some-button
```

## Imports
* if you just need the web component as-is
```javascript
import '@quincarter/some-button';
```
* If you need to rename the element for some reason, you can do this:
```javascript
import { SomeButton } from '@quincarter/some-button/SomeButton';

// then define the component yourself with a custom tag name
customElements.define('foo-my-tag-here-bar', SomeButton);
```

## Usage
```html
<some-button my-some-button-title="testing this attribute works">
</some-button>
```

## Properties

| Property          | Attribute           | Type     | Default              |
|-------------------|---------------------|----------|----------------------|
| `someButtonTitle` | `some-button-title` | `string` | "some-button works!" |

## Slots

| Name   | Description                            |
|--------|----------------------------------------|
| `card` | slot a slotted element thing goes here |
