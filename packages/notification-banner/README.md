# notification-banner

This is a short description of your component. Change me in [./src/notification-banner.ts](./src/notification-banner.ts#L6-42) in the JSDoc above the Component Class.

* Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
* Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
* For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)

## Installation
```bash
npm i -s @quincarter/notification-banner
```
or with `yarn`
```bash
yarn add @quincarter/notification-banner
```

# Web Component
* Use this method if you need to use notification-banner in its entirety
## Imports
* if you just need the web component as-is
```javascript
import '@quincarter/notification-banner';
```
* If you need to rename the element for some reason, you can do this:
```javascript

import { NotificationBanner } from '@quincarter/notification-banner/NotificationBanner';

// then define the component yourself with a custom tag name
customElements.define('foo-my-tag-here-bar', NotificationBanner);

```

## WC Usage Example
```html
<notification-banner my-notification-banner-title="testing this attribute works">
</notification-banner>
```

# Core
* Use this method if you need to use pieces of notification-banner, but you don't need the entire web component.
## Imports
```typescript
import { INotificationBannerComponent,  NotificationBannerComponentStyles } from '@quincarter/notification-banner/CoreNotificationBannerComponent';
```

## Core Usage Example
### Core Interface
```typescript
import { LitElement } from 'lit';
import { INotificationBannerComponent } from '@quincarter/notification-banner/CoreNotificationBannerComponent';

export class FooBar extends LitElement implements INotificationBannerComponent {
// TODO: Implement Interface definition
}
```

### Core Styles
```typescript
import { LitElement } from 'lit';
import { NotificationBannerComponentStyles } from '@quincarter/notification-banner/CoreNotificationBannerComponent';

export class BarFoo extends LitElement {
    static get styles(): CSSResult[] {
        return [
            NotificationBannerComponentStyles,
            css`/* my css here /*`
        ];
    }
}
```

## Properties

| Property            | Attribute            | Type                          | Default     | Description                                 |
|---------------------|----------------------|-------------------------------|-------------|---------------------------------------------|
| `bannerDescription` | `banner-description` | `string \| undefined`         | "undefined" | Description of the alert message            |
| `bannerTitle`       | `banner-title`       | `string \| undefined`         | "undefined" | Determines the title value of the component |
| `notificationState` |                      | `string \| null \| undefined` |             |                                             |

## Methods

| Method                  | Type                               |
|-------------------------|------------------------------------|
| `dismissNotification`   | `(e: MouseEvent): void`            |
| `getBannerDetails`      | `(): Promise<void>`                |
| `getSessionStorageData` | `(): Promise<void>`                |
| `setNotificationState`  | `(): Promise<void>`                |
| `setSessionStorageData` | `(value: NotificationState): void` |
