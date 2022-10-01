# my-button-test

This is a short description of your component. Change me in [./src/my-button-test.ts](./src/my-button-test.ts#L6-42) in the JSDoc above the Component Class.

* Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
* Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
* For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)

## Installation
```bash
npm i -s @quincarter/my-button-test
```
or with `yarn`
```bash
yarn add @quincarter/my-button-test
```

## Imports
* if you just need the web component as-is
```javascript
import '@quincarter/my-button-test';
```
* If you need to rename the element for some reason, you can do this:
```javascript
import { MyButtonTest } from '@quincarter/my-button-test/MyButtonTest';

// then define the component yourself with a custom tag name
customElements.define('foo-my-tag-here-bar', MyButtonTest);
```

## Usage
```html
<my-button-test my-my-button-test-title="testing this attribute works">
</my-button-test>
```

## Properties

| Property         | Attribute         | Type      | Default                 |
|------------------|-------------------|-----------|-------------------------|
| `buttonColor`    | `button-color`    | `string`  | "rebeccapurple"         |
| `buttonDisabled` | `button-disabled` | `boolean` | false                   |
| `buttonTitle`    | `button-title`    | `string`  | "my-button-test works!" |

## Slots

| Name   | Description                            |
|--------|----------------------------------------|
| `card` | slot a slotted element thing goes here |
