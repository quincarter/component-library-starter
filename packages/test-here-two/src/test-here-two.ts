import { LitElement, html, HTMLTemplateResult, CSSResultOrNative } from 'lit';
import { property } from 'lit/decorators.js';
import { TestHereTwoComponentStyles } from '../core/test-here-two.styles';
import { ITestHereTwoComponent } from '../core/TestHereTwo.interface';

/**
 * This is a short description of your component. Change me in [./src/test-here-two.ts](./src/test-here-two.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 *
 * ```bash
 * npm i -s @quincarter/test-here-two
 * ```
 *
 * or with `yarn`
 *
 * ```bash
 *
 * yarn add @quincarter/test-here-two
 *
 * ```
 *
 *
 * # Web Component
 * * Use this method if you need to use test-here-two in its entirety
 *
 * ## Imports
 * * if you just need the web component as-is
 *
 * ```javascript
 *
 * import '@quincarter/test-here-two';
 *
 * ```
 *
 * * If you need to rename the element for some reason, you can do this:
 *
 * ```javascript
 *
 *
 * import { TestHereTwo } from '@quincarter/test-here-two/TestHereTwo';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', TestHereTwo);
 *
 *
 * ```
 *
 * ## WC Usage Example
 *
 * ```html
 *
 * <test-here-two my-test-here-two-title="testing this attribute works">
 * </test-here-two>
 *
 * ```
 *
 * # Core
 * * Use this method if you need to use pieces of test-here-two, but you don't need the entire web component.
 * ## Imports
 *
 * ```typescript
 *
 * import { ITestHereTwoComponent,  TestHereTwoComponentStyles } from '@quincarter/test-here-two/CoreTestHereTwoComponent';
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
 * import { ITestHereTwoComponent } from '@quincarter/test-here-two/CoreTestHereTwoComponent';
 *
 * export class FooBar extends LitElement implements ITestHereTwoComponent {
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
 * import { TestHereTwoComponentStyles } from '@quincarter/test-here-two/CoreTestHereTwoComponent';
 *
 * export class BarFoo extends LitElement {
 *     static get styles(): CSSResult[] {
 *         return [
 *             TestHereTwoComponentStyles,
 *             css`/* my css here /*`
 *         ];
 *     }
 * }
 *
 * ```
 *
 *
 * @element test-here-two
 *
 *
 */
export class TestHereTwoComponent
  extends LitElement
  implements ITestHereTwoComponent
{
  /**
   * Determines the title value of the component
   * @attr test-here-two-title
   * @default test-here-two works!
   */
  @property({ type: String, attribute: 'test-here-two-title' })
  testHereTwoTitle: string;

  static get styles(): CSSResultOrNative[] {
    return [TestHereTwoComponentStyles];
  }

  constructor() {
    super();

    this.testHereTwoTitle = 'test-here-two works!';
  }

  render(): HTMLTemplateResult {
    return html`
      <h1 class="test-here-two-test-color">${this.testHereTwoTitle}</h1>
      <div>
        <p>
          Your component is located in <code>/packages/test-here-two</code> and
          the component and styles are already separated into their own files.
        </p>
        <p>
          This is just a test component generated using the component generator
        </p>
        <p>
          Edit the <code>test-here-two.ts</code> code or remove this code and
          use it as your own.
        </p>
      </div>
    `;
  }
}
