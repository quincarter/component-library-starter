# some-button

This is a short description of your component. Change me.

## Installation
```bash
npm i -s @quincarter/some-button
```
or with `yarn`
```bash
yarn add @quincarter/some-button
```

## Imports
* if you just need the web component as-is
```javascript
import '@quincarter/some-button';
```
* If you need to rename the element for some reason, you can do this:
```javascript
import { SomeButton } from '@quincarter/some-button/SomeButton';
```

## Usage
```html
<some-button my-some-button-title="testing this attribute works">
</some-button>
```

## Properties

| Property          | Attribute           | Type     | Default              |
|-------------------|---------------------|----------|----------------------|
| `someButtonTitle` | `some-button-title` | `string` | "some-button works!" |

## Slots

| Name   | Description                            |
|--------|----------------------------------------|
| `card` | slot a slotted element thing goes here |
