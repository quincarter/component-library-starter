import { LitElement, html, HTMLTemplateResult, CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import { MyTestCardCardStyles } from '../core/my-test-card.styles';
import { IMyTestCardCard } from '../core/MyTestCard.interface';

/**
 * This is a short description of your component. Change me in [./src/my-test-card.ts](./src/my-test-card.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 * ```bash
 * npm i -s @quincarter/my-test-card
 * ```
 * or with `yarn`
 * ```bash
 * yarn add @quincarter/my-test-card
 * ```
 *
 * ## Imports
 * * if you just need the web component as-is
 * ```javascript
 * import '@quincarter/my-test-card';
 * ```
 * * If you need to rename the element for some reason, you can do this:
 * ```javascript
 * import { MyTestCard } from '@quincarter/my-test-card/MyTestCard';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', MyTestCard);
 * ```
 *
 * ## Usage
 * ```html
 * <my-test-card my-my-test-card-title="testing this attribute works">
 * </my-test-card>
 * ```
 * @element my-test-card
 *
 * @slot card-slot a slotted element thing goes here
 *
 *
 */
export class MyTestCardCard extends LitElement implements IMyTestCardCard {
  @property({ type: String, attribute: 'my-test-card-title' })
  myTestCardTitle: string;

  static get styles(): CSSResult[] {
    return [MyTestCardCardStyles];
  }

  constructor() {
    super();

    this.myTestCardTitle = 'my-test-card works!';
  }

  render(): HTMLTemplateResult {
    return html`
      <div class="card">
        <div class="card-title">
          <h1 class="my-test-card-test-color">${this.myTestCardTitle}</h1>
        </div>
        <div class="card-body">
          <p>
            Your component is located in <code>/packages/my-test-card</code> and
            the component and styles are already separated into their own files.
          </p>
          <p>
            This is just a test component generated using the component
            generator
          </p>
          <p>
            Edit the <code>my-test-card.ts</code> code or remove this code and
            use it as your own.
          </p>
          <slot name="card-slot"></slot>
        </div>
      </div>
    `;
  }
}
