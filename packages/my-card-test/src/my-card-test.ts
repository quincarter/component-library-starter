import { LitElement, html, HTMLTemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { MyCardTestCardStyles } from './my-card-test.styles.js';
import { IMyCardTestCard } from '../core/MyCardTest.interface';

/**
 * This is a short description of your component. Change me in [./src/my-card-test.ts](./src/my-card-test.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 * ```bash
 * npm i -s @quincarter/my-card-test
 * ```
 * or with `yarn`
 * ```bash
 * yarn add @quincarter/my-card-test
 * ```
 *
 * ## Imports
 * * if you just need the web component as-is
 * ```javascript
 * import '@quincarter/my-card-test';
 * ```
 * * If you need to rename the element for some reason, you can do this:
 * ```javascript
 * import { MyCardTest } from '@quincarter/my-card-test/MyCardTest';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', MyCardTest);
 * ```
 *
 * ## Usage
 * ```html
 * <my-card-test my-my-card-test-title="testing this attribute works">
 * </my-card-test>
 * ```
 * @element my-card-test
 *
 * @slot card-slot a slotted element thing goes here
 *
 *
 */
export class MyCardTestCard extends LitElement implements IMyCardTestCard {
  @property({ type: String, attribute: 'my-card-test-title' })
  myCardTestTitle: string;

  static get styles() {
    return [MyCardTestCardStyles];
  }

  constructor() {
    super();

    this.myCardTestTitle = 'my-card-test works!';
  }

  render(): HTMLTemplateResult {
    return html`
      <div class="card">
        <div class="card-title">
          <h1 class="my-card-test-test-color">${this.myCardTestTitle}</h1>
        </div>
        <div class="card-body">
          <p>
            Your component is located in <code>/packages/my-card-test</code> and
            the component and styles are already separated into their own files.
          </p>
          <p>
            This is just a test component generated using the component
            generator
          </p>
          <p>
            Edit the <code>my-card-test.ts</code> code or remove this code and
            use it as your own.
          </p>
          <slot name="card-slot"></slot>
        </div>
      </div>
    `;
  }
}
