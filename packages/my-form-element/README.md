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

# Web Component
* Use this method if you need to use my-form-element in its entirety
## Imports
* if you just need the web component as-is
```javascript
import '@quincarter/my-form-element';
```
* If you need to rename the element for some reason, you can do this:
```javascript
  import { MyFormElementButton } from '@quincarter/my-form-element/MyFormElementButton';

// then define the component yourself with a custom tag name
customElements.define('foo-my-tag-here-bar', MyFormElementButton);

```

## WC Usage Example
```html
<my-form-element my-my-form-element-title="testing this attribute works">
</my-form-element>
```

# Core
* Use this method if you need to use pieces of my-form-element, but you don't need the entire web component.
## Imports
```typescript
import { IMyFormElementButton,  MyFormElementButtonStyles } from '@quincarter/my-form-element/CoreMyFormElementButton';
```

## Core Usage Example
### Core Interface
```typescript
import { LitElement } from 'lit';
import { IMyFormElementButton } from '@quincarter/my-form-element/CoreMyFormElementButton';

export class FooBar extends LitElement implements IMyFormElementButton {
// TODO: Implement Interface definition
}
```

### Core Styles
```typescript
import { LitElement } from 'lit';
import { MyFormElementButtonStyles } from '@quincarter/my-form-element/CoreMyFormElementButton';

export class BarFoo extends LitElement {
     static get styles(): CSSResult[] {
         return [
             MyFormElementButtonStyles,
             css`/* my css here /*`
         ];
     }
}
```

## Properties

| Property         | Attribute         | Type      | Default                  | Description                              |
|------------------|-------------------|-----------|--------------------------|------------------------------------------|
| `buttonColor`    | `button-color`    | `string`  | "rebeccapurple"          | Determines the button color              |
| `buttonDisabled` | `button-disabled` | `boolean` | "false"                  | Determines if the button is disabled     |
| `buttonTitle`    | `button-title`    | `string`  | "my-form-element works!" | Determines the title value of the button |
