import { LitElement, html, HTMLTemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { FancyAccordionComponentStyles } from './fancy-accordion.styles.js';
import { IFancyAccordion } from '../core/FancyAccordion.interface';

/**
 * This is a short description of your component. Change me in [./src/fancy-accordion.ts](./src/fancy-accordion.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 * ```bash
 * npm i -s @quincarter/fancy-accordion
 * ```
 * or with `yarn`
 * ```bash
 * yarn add @quincarter/fancy-accordion
 * ```
 *
 * ## Imports
 * * if you just need the web component as-is
 * ```javascript
 * import '@quincarter/fancy-accordion';
 * ```
 * * If you need to rename the element for some reason, you can do this:
 * ```javascript
 * import { FancyAccordion } from '@quincarter/fancy-accordion/FancyAccordion';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', FancyAccordion);
 * ```
 *
 * ## Usage
 * ```html
 * <fancy-accordion my-fancy-accordion-title="testing this attribute works">
 * </fancy-accordion>
 * ```
 * @element fancy-accordion
 * @slot card-slot a slotted element thing goes here
 *
 */
export class FancyAccordionComponent
  extends LitElement
  implements IFancyAccordion
{
  @property({ type: String, attribute: 'fancy-accordion-title' })
  fancyAccordionTitle: string;

  static get styles() {
    return [FancyAccordionComponentStyles];
  }

  constructor() {
    super();
    this.fancyAccordionTitle = 'fancy-accordion works!';
  }

  render(): HTMLTemplateResult {
    return html`
      <div class="card">
        <div class="card-title">
          <h1 class="fancy-accordion-test-color">
            ${this.fancyAccordionTitle}
          </h1>
        </div>
        <div class="card-body">
          <p>
            Your component is located in
            <code>/packages/fancy-accordion</code> and the component and styles
            are already separated into their own files.
          </p>
          <p>
            This is just a test component generated using the component
            generator
          </p>
          <p>
            Edit the <code>fancy-accordion.ts</code> code or remove this code
            and use it as your own.
          </p>
          <slot name="card-slot"></slot>
        </div>
      </div>
    `;
  }
}
