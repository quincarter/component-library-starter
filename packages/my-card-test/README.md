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

# Web Component
* Use this method if you need to use my-card-test in its entirety
## Imports
* if you just need the web component as-is
```javascript
import '@quincarter/my-card-test';
```
* If you need to rename the element for some reason, you can do this:
```javascript
 import { MyCardTestCard } from '@quincarter/my-card-test/MyCardTestCard';

// then define the component yourself with a custom tag name
customElements.define('foo-my-tag-here-bar', MyCardTestCard);

```

## WC Usage Example
```html
<my-card-test my-my-card-test-title="testing this attribute works">
</my-card-test>
```

# Core
* Use this method if you need to use pieces of my-card-test, but you don't need the entire web component.
## Imports
```typescript
import { IMyCardTestCard,  MyCardTestCardStyles } from '@quincarter/my-card-test/CoreMyCardTestCard';
```

## Core Usage Example
### Core Interface
```typescript
import { LitElement } from 'lit';
import { IMyCardTestCard } from '@quincarter/my-card-test/CoreMyCardTestCard';

export class FooBar extends LitElement implements IMyCardTestCard {
// TODO: Implement Interface definition
}
```

### Core Styles
```typescript
import { LitElement } from 'lit';
import { MyCardTestCardStyles } from '@quincarter/my-card-test/CoreMyCardTestCard';

export class BarFoo extends LitElement {
    static get styles(): CSSResult[] {
        return [
            MyCardTestCardStyles,
            css`/* my css here /*`
        ];
    }
}
```

## Properties

| Property          | Attribute            | Type     | Default               | Description                                 |
|-------------------|----------------------|----------|-----------------------|---------------------------------------------|
| `myCardTestTitle` | `my-card-test-title` | `string` | "my-card-test works!" | Determines the title value of the component |

## Slots

| Name   | Description                            |
|--------|----------------------------------------|
| `card` | slot a slotted element thing goes here |
