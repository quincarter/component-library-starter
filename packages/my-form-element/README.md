# my-form-element

This is a short description of your component. Change me in [./src/my-form-element.ts](./src/my-form-element.ts#L6-42) in the JSDoc above the Component Class.

* Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
* Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
* For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)

## Installation
```bash
npm i -s @quincarter/my-form-element
```
or with `yarn`
```bash
yarn add @quincarter/my-form-element
```

## Imports
* if you just need the web component as-is
```javascript
import '@quincarter/my-form-element';
```
* If you need to rename the element for some reason, you can do this:
```javascript
import { MyFormElement } from '@quincarter/my-form-element/MyFormElement';

// then define the component yourself with a custom tag name
customElements.define('foo-my-tag-here-bar', MyFormElement);
```

## Usage
```html
<my-form-element my-my-form-element-title="testing this attribute works">
</my-form-element>
```

## Properties

| Property         | Attribute         | Type      | Default                  |
|------------------|-------------------|-----------|--------------------------|
| `buttonColor`    | `button-color`    | `string`  | "rebeccapurple"          |
| `buttonDisabled` | `button-disabled` | `boolean` | false                    |
| `buttonTitle`    | `button-title`    | `string`  | "my-form-element works!" |

## Slots

| Name   | Description                            |
|--------|----------------------------------------|
| `card` | slot a slotted element thing goes here |
