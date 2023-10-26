import { LitElement, html, HTMLTemplateResult, CSSResultOrNative } from 'lit';
import { property } from 'lit/decorators.js';
import { TestHereBlahComponentStyles } from '../core/test-here-blah.styles';
import { ITestHereBlahComponent } from '../core/TestHereBlah.interface';

/**
 * This is a short description of your component. Change me in [./src/test-here-blah.ts](./src/test-here-blah.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 * ```sh
 * npm i -s @quincarter/test-here-blah
 * ```
 *
 * or with `yarn`
 *
 * ```sh
 * yarn add @quincarter/test-here-blah
 * ```
 *
 * # Web Component
 * * Use this method if you need to use test-here-blah in its entirety
 *
 * ## Imports
 * * if you just need the web component as-is
 *
 * ```javascript
 *
 * import '@quincarter/test-here-blah';
 *
 * ```
 *
 * * If you need to rename the element for some reason, you can do this:
 *
 * ```javascript
 *
 *
 * import { TestHereBlah } from '@quincarter/test-here-blah/TestHereBlah';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', TestHereBlah);
 *
 *
 * ```
 *
 * ## WC Usage Example
 *
 * ```html
 *
 * <test-here-blah my-test-here-blah-title="testing this attribute works">
 * </test-here-blah>
 *
 * ```
 *
 * # Core
 * * Use this method if you need to use pieces of test-here-blah, but you don't need the entire web component.
 * ## Imports
 *
 * ```typescript
 *
 * import { ITestHereBlahComponent,  TestHereBlahComponentStyles } from '@quincarter/test-here-blah/CoreTestHereBlahComponent';
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
 * import { ITestHereBlahComponent } from '@quincarter/test-here-blah/CoreTestHereBlahComponent';
 *
 * export class FooBar extends LitElement implements ITestHereBlahComponent {
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
 * import { TestHereBlahComponentStyles } from '@quincarter/test-here-blah/CoreTestHereBlahComponent';
 *
 * export class BarFoo extends LitElement {
 *     static get styles(): CSSResult[] {
 *         return [
 *             TestHereBlahComponentStyles,
 *             css`/* my css here /*`
 *         ];
 *     }
 * }
 *
 * ```
 *
 *
 * @element test-here-blah
 *
 *
 */
export class TestHereBlahComponent
  extends LitElement
  implements ITestHereBlahComponent
{
  /**
   * Determines the title value of the component
   * @attr test-here-blah-title
   * @default test-here-blah works!
   */
  @property({ type: String, attribute: 'test-here-blah-title' })
  testHereBlahTitle: string;

  static get styles(): CSSResultOrNative[] {
    return [TestHereBlahComponentStyles];
  }

  constructor() {
    super();

    this.testHereBlahTitle = 'test-here-blah works!';
  }

  render(): HTMLTemplateResult {
    return html`
      <h1 class="test-here-blah-test-color">${this.testHereBlahTitle}</h1>
      <div>
        <p>
          Your component is located in <code>/packages/test-here-blah</code> and
          the component and styles are already separated into their own files.
        </p>
        <p>
          This is just a test component generated using the component generator
        </p>
        <p>
          Edit the <code>test-here-blah.ts</code> code or remove this code and
          use it as your own.
        </p>
      </div>
    `;
  }
}
