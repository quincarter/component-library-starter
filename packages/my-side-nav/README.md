# my-side-nav

This is a short description of your component. Change me in [./src/my-side-nav.ts](./src/my-side-nav.ts#L6-42) in the JSDoc above the Component Class.

* Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
* Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
* For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)

## Installation
```bash
npm i -s @quincarter/my-side-nav
```
or with `yarn`
```bash
yarn add @quincarter/my-side-nav
```

# Web Component
* Use this method if you need to use my-side-nav in its entirety
## Imports
* if you just need the web component as-is
```javascript
import '@quincarter/my-side-nav';
```
* If you need to rename the element for some reason, you can do this:
```javascript

import { MySideNav } from '@quincarter/my-side-nav/MySideNav';

// then define the component yourself with a custom tag name
customElements.define('foo-my-tag-here-bar', MySideNav);

```

## WC Usage Example
```html
<my-side-nav my-my-side-nav-title="testing this attribute works">
</my-side-nav>
```

# Core
* Use this method if you need to use pieces of my-side-nav, but you don't need the entire web component.
## Imports
```typescript
import { IMySideNavComponent,  MySideNavComponentStyles } from '@quincarter/my-side-nav/CoreMySideNavComponent';
```

## Core Usage Example
### Core Interface
```typescript
import { LitElement } from 'lit';
import { IMySideNavComponent } from '@quincarter/my-side-nav/CoreMySideNavComponent';

export class FooBar extends LitElement implements IMySideNavComponent {
// TODO: Implement Interface definition
}
```

### Core Styles
```typescript
import { LitElement } from 'lit';
import { MySideNavComponentStyles } from '@quincarter/my-side-nav/CoreMySideNavComponent';

export class BarFoo extends LitElement {
    static get styles(): CSSResult[] {
        return [
            MySideNavComponentStyles,
            css`/* my css here /*`
        ];
    }
}
```

## Properties

| Property   | Attribute   | Type                      | Description                                      |
|------------|-------------|---------------------------|--------------------------------------------------|
| `navLinks` | `nav-links` | `NavLinks[] \| undefined` | List of links and their children for the side navigation |

## Methods

| Method               | Type                                   |
|----------------------|----------------------------------------|
| `renderSideNavLinks` | `(): TemplateResult<1>[] \| undefined` |
