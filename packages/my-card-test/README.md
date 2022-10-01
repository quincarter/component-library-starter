# my-card-test

This is a short description of your component. Change me in [./src/my-card-test.ts](./src/my-card-test.ts#L6-42) in the JSDoc above the Component Class.

* Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
* Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
* For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)

## Installation
```bash
npm i -s @quincarter/my-card-test
```
or with `yarn`
```bash
yarn add @quincarter/my-card-test
```

## Imports
* if you just need the web component as-is
```javascript
import '@quincarter/my-card-test';
```
* If you need to rename the element for some reason, you can do this:
```javascript
import { MyCardTest } from '@quincarter/my-card-test/MyCardTest';

// then define the component yourself with a custom tag name
customElements.define('foo-my-tag-here-bar', MyCardTest);
```

## Usage
```html
<my-card-test my-my-card-test-title="testing this attribute works">
</my-card-test>
```

## Properties

| Property          | Attribute            | Type     | Default               |
|-------------------|----------------------|----------|-----------------------|
| `myCardTestTitle` | `my-card-test-title` | `string` | "my-card-test works!" |

## Slots

| Name   | Description                            |
|--------|----------------------------------------|
| `card` | slot a slotted element thing goes here |
