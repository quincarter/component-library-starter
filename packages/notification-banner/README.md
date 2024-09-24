# notification-banner

This is a short description of your component. Change me in [./src/notification-banner.ts](./src/notification-banner.ts#L6-42) in the JSDoc above the Component Class.

* Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
* Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
* For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)

## Installation
```bash
npm i -s

## Properties

| Property            | Attribute            | Type                          | Default     | Description                                 |
|---------------------|----------------------|-------------------------------|-------------|---------------------------------------------|
| `apiUrl`            | `api-url`            | `string`                      | ""          |                                             |
| `bannerDescription` | `banner-description` | `string \| undefined`         | "undefined" | Description of the alert message            |
| `bannerTitle`       | `banner-title`       | `string \| undefined`         | "undefined" | Determines the title value of the component |
| `notificationState` | `notification-state` | `string \| null \| undefined` |             |                                             |
| `useStorage`        | `use-storage`        | `boolean`                     | false       |                                             |

## Methods

| Method                  | Type                               |
|-------------------------|------------------------------------|
| `dismissNotification`   | `(e: MouseEvent): void`            |
| `getBannerDetails`      | `(): Promise<void>`                |
| `getSessionStorageData` | `(): Promise<void>`                |
| `setNotificationState`  | `(): Promise<void>`                |
| `setSessionStorageData` | `(value: NotificationState): void` |
