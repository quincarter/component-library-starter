import { LitElement, html, HTMLTemplateResult, CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import { MyHeaderComponentStyles } from '../core/my-header.styles';
import { IMyHeaderComponent } from '../core/MyHeader.interface';

/**
 * This is a short description of your component. Change me in [./src/my-header.ts](./src/my-header.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 * ```bash
 * npm i -s @quincarter/my-header
 * ```
 * or with `yarn`
 * ```bash
 * yarn add @quincarter/my-header
 * ```
 *
 * ## Imports
 * * if you just need the web component as-is
 * ```javascript
 * import '@quincarter/my-header';
 * ```
 * * If you need to rename the element for some reason, you can do this:
 * ```javascript
 * import { MyHeader } from '@quincarter/my-header/MyHeader';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', MyHeader);
 * ```
 *
 * ## Usage
 * ```html
 * <my-header my-my-header-title="testing this attribute works">
 * </my-header>
 * ```
 * @element my-header
 *
 *
 */
export class MyHeaderComponent
  extends LitElement
  implements IMyHeaderComponent
{
  @property({ type: String, attribute: 'my-header-title' })
  myHeaderTitle: string;

  static get styles(): CSSResult[] {
    return [MyHeaderComponentStyles];
  }

  constructor() {
    super();

    this.myHeaderTitle = 'my-header works!';
  }

  render(): HTMLTemplateResult {
    return html`
      <h1 class="my-header-test-color">${this.myHeaderTitle}</h1>
      <div>
        <p>
          Your component is located in <code>/packages/my-header</code> and the
          component and styles are already separated into their own files.
        </p>
        <p>
          This is just a test component generated using the component generator
        </p>
        <p>
          Edit the <code>my-header.ts</code> code or remove this code and use it
          as your own.
        </p>
      </div>
    `;
  }
}
