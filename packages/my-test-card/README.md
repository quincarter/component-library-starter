# my-test-card

This is a short description of your component. Change me in [./src/my-test-card.ts](./src/my-test-card.ts#L6-42) in the JSDoc above the Component Class.

* Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
* Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
* For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)

## Installation
```bash
npm i -s @quincarter/my-test-card
```
or with `yarn`
```bash
yarn add @quincarter/my-test-card
```

## Imports
* if you just need the web component as-is
```javascript
import '@quincarter/my-test-card';
```
* If you need to rename the element for some reason, you can do this:
```javascript
import { MyTestCard } from '@quincarter/my-test-card/MyTestCard';

// then define the component yourself with a custom tag name
customElements.define('foo-my-tag-here-bar', MyTestCard);
```

## Usage
```html
<my-test-card my-my-test-card-title="testing this attribute works">
</my-test-card>
```

## Properties

| Property          | Attribute            | Type     | Default               |
|-------------------|----------------------|----------|-----------------------|
| `myTestCardTitle` | `my-test-card-title` | `string` | "my-test-card works!" |

## Slots

| Name   | Description                            |
|--------|----------------------------------------|
| `card` | slot a slotted element thing goes here |
