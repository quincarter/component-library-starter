import { LitElement, html, HTMLTemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BlahButtonTestTwoComponentStyles } from './blah-button-test-two.styles.js';

export interface IBlahButtonTestTwo {
  blahButtonTestTwoTitle: string;
}
/**
 * This is a short description of your component. Change me.
 *
 * ## Installation
 * ```bash
 * npm i -s @quincarter/blah-button-test-two
 * ```
 * or with `yarn`
 * ```bash
 * yarn add @quincarter/blah-button-test-two
 * ```
 *
 * ## Usage
 * ```html
 * <blah-button-test-two blah-button-test-two-title="testing blah-button-test-two title">
 * </blah-button-test-two>
 * ```
 * @element blah-button-test-two
 * @slot card-slot a slotted element thing goes here
 *
 */
export class BlahButtonTestTwoComponent
  extends LitElement
  implements IBlahButtonTestTwo
{
  @property({ type: String, attribute: 'blah-button-test-two-title' })
  blahButtonTestTwoTitle: string;

  static get styles() {
    return [BlahButtonTestTwoComponentStyles];
  }

  constructor() {
    super();
    this.blahButtonTestTwoTitle = 'blah-button-test-two works!';
  }

  render(): HTMLTemplateResult {
    return html`
      <div class="card">
        <div class="card-title">
          <h1 class="blah-button-test-two-test-color">
            ${this.blahButtonTestTwoTitle}
          </h1>
        </div>
        <div class="card-body">
          <p>
            Your component is located in
            <code>/packages/blah-button-test-two</code> and the component and
            styles are already separated into their own files.
          </p>
          <p>
            This is just a test component generated using the component
            generator
          </p>
          <p>
            Edit the <code>blah-button-test-two.ts</code> code or remove this
            code and use it as your own.
          </p>
          <slot name="card-slot"></slot>
        </div>
      </div>
    `;
  }
}
