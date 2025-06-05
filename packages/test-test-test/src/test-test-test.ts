import { LitElement, html, HTMLTemplateResult, CSSResultOrNative } from 'lit';
import { property } from 'lit/decorators.js';
import { TestTestTestComponentStyles } from '../core/test-test-test.styles';
import { ITestTestTestComponent } from '../core/TestTestTest.interface';

/**
 * This is a short description of your component. Change me in [./src/test-test-test.ts](./src/test-test-test.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 *
 * ```bash
 * npm i -s @quincarter/test-test-test
 * ```
 *
 * or with `yarn`
 *
 * ```bash
 *
 * yarn add @quincarter/test-test-test
 *
 * ```
 *
 *
 * # Web Component
 * * Use this method if you need to use test-test-test in its entirety
 *
 * ## Imports
 * * if you just need the web component as-is
 *
 * ```javascript
 *
 * import '@quincarter/test-test-test';
 *
 * ```
 *
 * * If you need to rename the element for some reason, you can do this:
 *
 * ```javascript
 *
 *
 * import { TestTestTest } from '@quincarter/test-test-test/TestTestTest';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', TestTestTest);
 *
 *
 * ```
 *
 * ## WC Usage Example
 *
 * ```html
 *
 * <test-test-test my-test-test-test-title="testing this attribute works">
 * </test-test-test>
 *
 * ```
 *
 * # Core
 * * Use this method if you need to use pieces of test-test-test, but you don't need the entire web component.
 * ## Imports
 *
 * ```typescript
 *
 * import { ITestTestTestComponent,  TestTestTestComponentStyles } from '@quincarter/test-test-test/CoreTestTestTestComponent';
 *
 * ```
 *
 * ## Core Usage Example
 *
 * ### Core Interface
 *
 * ```typescript
 *
 * import { LitElement } from 'lit';
 * import { ITestTestTestComponent } from '@quincarter/test-test-test/CoreTestTestTestComponent';
 *
 * export class FooBar extends LitElement implements ITestTestTestComponent {
 * // TODO: Implement Interface definition
 * }
 *
 * ```
 *
 * ### Core Styles
 *
 * ```typescript
 *
 * import { LitElement } from 'lit';
 * import { TestTestTestComponentStyles } from '@quincarter/test-test-test/CoreTestTestTestComponent';
 *
 * export class BarFoo extends LitElement {
 *     static get styles(): CSSResult[] {
 *         return [
 *             TestTestTestComponentStyles,
 *             css`/* my css here /*`
 *         ];
 *     }
 * }
 *
 * ```
 *
 *
 * @element test-test-test
 *
 *
 */
export class TestTestTestComponent
  extends LitElement
  implements ITestTestTestComponent
{
  /**
   * Determines the title value of the component
   * @attr test-test-test-title
   * @default test-test-test works!
   */
  @property({ type: String, attribute: 'test-test-test-title' })
  testTestTestTitle: string;

  static get styles(): CSSResultOrNative[] {
    return [TestTestTestComponentStyles];
  }

  constructor() {
    super();

    this.testTestTestTitle = 'test-test-test works!';
  }

  render(): HTMLTemplateResult {
    return html`
      <h1 class="test-test-test-test-color">${this.testTestTestTitle}</h1>
      <div>
        <p>
          Your component is located in <code>/packages/test-test-test</code> and
          the component and styles are already separated into their own files.
        </p>
        <p>
          This is just a test component generated using the component generator
        </p>
        <p>
          Edit the <code>test-test-test.ts</code> code or remove this code and
          use it as your own.
        </p>
      </div>
    `;
  }
}
