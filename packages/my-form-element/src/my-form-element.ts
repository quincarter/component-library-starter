import { LitElement, html, HTMLTemplateResult, CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import { MyFormElementButtonStyles } from '../core/my-form-element.styles';
import { IMyFormElementButton } from '../core/MyFormElement.interface';

/**
 * This is a short description of your component. Change me in [./src/my-form-element.ts](./src/my-form-element.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 * ```bash
 * npm i -s @quincarter/my-form-element
 * ```
 * or with `yarn`
 * ```bash
 * yarn add @quincarter/my-form-element
 * ```
 *
 * # Web Component
 * * Use this method if you need to use my-form-element in its entirety
 * ## Imports
 * * if you just need the web component as-is
 * ```javascript
 * import '@quincarter/my-form-element';
 * ```
 * * If you need to rename the element for some reason, you can do this:
 * ```javascript
 * import { MyFormElement } from '@quincarter/my-form-element/MyFormElement';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', MyFormElement);
 * ```
 *
 * ## WC Usage Example
 * ```html
 * <my-form-element my-my-form-element-title="testing this attribute works">
 * </my-form-element>
 * ```
 *
 * # Core
 * * Use this method if you need to use pieces of my-form-element, but you don't need the entire web component.
 * ## Imports
 * ```typescript
 * import { IMyFormElementButton,  MyFormElementButtonStyles } from '@quincarter/my-form-element/CoreMyFormElement';
 * ```
 *
 * ## Core Usage Example
 * ### Core Interface
 * ```typescript
 * import { LitElement } from 'lit';
 * import { IMyFormElementButton } from '@quincarter/my-form-element/CoreMyFormElement';
 *
 * export class FooBar extends LitElement implements IMyFormElementButton {
 * // TODO: Implement Interface definition
 * }
 * ```
 *
 * ### Core Styles
 * ```typescript
 * import { LitElement } from 'lit';
 * import { MyFormElementButtonStyles } from '@quincarter/my-form-element/CoreMyFormElement';
 *
 * export class BarFoo extends LitElement {
 *     static get styles(): CSSResult[] {
 *         return [
 *             MyFormElementButtonStyles,
 *             css`/* my css here /*`
 *         ];
 *     }
 * }
 * ```
 *
 *
 * @element my-form-element
 *
 */
export class MyFormElementButton
  extends LitElement
  implements IMyFormElementButton
{
  /**
   * Determines the title value of the button
   * @attr button-title
   * @default my-form-element works!
   */
  @property({ type: String, attribute: 'button-title' })
  buttonTitle: string;

  /**
   * Determines if the button is disabled
   * @attr button-disabled
   * @default false
   */
  @property({ type: Boolean, attribute: 'button-disabled' })
  buttonDisabled = false;

  /**
   * Determines the button color
   * @attr button-color
   * @default rebeccapurple
   */
  @property({ type: String, attribute: 'button-color' })
  buttonColor: string;

  static get styles(): CSSResult[] {
    return [MyFormElementButtonStyles];
  }

  constructor() {
    super();

    this.buttonTitle = 'my-form-element works!';
    this.buttonColor = 'rebeccapurple';
  }

  render(): HTMLTemplateResult {
    return html`
      <div class="button-container">
        <button
          class="button my-form-element-test-color"
          style="background-color: ${this.buttonColor};"
        >
          ${this.buttonTitle}
        </button>
      </div>
    `;
  }
}
