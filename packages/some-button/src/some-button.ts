import { LitElement, html, HTMLTemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { SomeButtonComponentStyles } from './some-button.styles.js';
import { ISomeButton } from '../core/SomeButton.interface';

/**
 * This is a short description of your component. Change me in [./src/some-button.ts](./src/some-button.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 * ```bash
 * npm i -s @quincarter/some-button
 * ```
 * or with `yarn`
 * ```bash
 * yarn add @quincarter/some-button
 * ```
 *
 * ## Imports
 * * if you just need the web component as-is
 * ```javascript
 * import '@quincarter/some-button';
 * ```
 * * If you need to rename the element for some reason, you can do this:
 * ```javascript
 * import { SomeButton } from '@quincarter/some-button/SomeButton';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', SomeButton);
 * ```
 *
 * ## Usage
 * ```html
 * <some-button my-some-button-title="testing this attribute works">
 * </some-button>
 * ```
 * @element some-button
 * @slot card-slot a slotted element thing goes here
 *
 */
export class SomeButtonComponent extends LitElement implements ISomeButton {
  @property({ type: String, attribute: 'some-button-title' })
  someButtonTitle: string;

  static get styles() {
    return [SomeButtonComponentStyles];
  }

  constructor() {
    super();
    this.someButtonTitle = 'some-button works!';
  }

  render(): HTMLTemplateResult {
    return html`
      <div class="card">
        <div class="card-title">
          <h1 class="some-button-test-color">${this.someButtonTitle}</h1>
        </div>
        <div class="card-body">
          <p>
            Your component is located in <code>/packages/some-button</code> and
            the component and styles are already separated into their own files.
          </p>
          <p>
            This is just a test component generated using the component
            generator
          </p>
          <p>
            Edit the <code>some-button.ts</code> code or remove this code and
            use it as your own.
          </p>
          <slot name="card-slot"></slot>
        </div>
      </div>
    `;
  }
}
