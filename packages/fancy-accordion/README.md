# fancy-accordion

This is a short description of your component. Change me in [./src/fancy-accordion.ts](./src/fancy-accordion.ts#L6-42) in the JSDoc above the Component Class.

* Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
* Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
* For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)

## Installation
```bash
npm i -s @quincarter/fancy-accordion
```
or with `yarn`
```bash
yarn add @quincarter/fancy-accordion
```

## Imports
* if you just need the web component as-is
```javascript
import '@quincarter/fancy-accordion';
```
* If you need to rename the element for some reason, you can do this:
```javascript
import { FancyAccordion } from '@quincarter/fancy-accordion/FancyAccordion';

// then define the component yourself with a custom tag name
customElements.define('foo-my-tag-here-bar', FancyAccordion);
```

## Usage
```html
<fancy-accordion my-fancy-accordion-title="testing this attribute works">
</fancy-accordion>
```

## Properties

| Property              | Attribute               | Type     | Default                  |
|-----------------------|-------------------------|----------|--------------------------|
| `fancyAccordionTitle` | `fancy-accordion-title` | `string` | "fancy-accordion works!" |

## Slots

| Name   | Description                            |
|--------|----------------------------------------|
| `card` | slot a slotted element thing goes here |
