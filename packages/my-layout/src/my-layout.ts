import { LitElement, html, HTMLTemplateResult, CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import { MyLayoutComponentStyles } from '../core/my-layout.styles';
import { IMyLayoutComponent } from '../core/MyLayout.interface';

/**
 * This is a short description of your component. Change me in [./src/my-layout.ts](./src/my-layout.ts#L6-42) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 * ```bash
 * npm i -s @quincarter/my-layout
 * ```
 * or with `yarn`
 * ```bash
 * yarn add @quincarter/my-layout
 * ```
 *
 * # Web Component
 * * Use this method if you need to use my-layout in its entirety
 * ## Imports
 * * if you just need the web component as-is
 * ```javascript
 * import '@quincarter/my-layout';
 * ```
 * * If you need to rename the element for some reason, you can do this:
 * ```javascript
 *
 * import { MyLayout } from '@quincarter/my-layout/MyLayout';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', MyLayout);
 *
 * ```
 *
 * ## WC Usage Example
 * ```html
 * <my-layout my-my-layout-title="testing this attribute works">
 * </my-layout>
 * ```
 *
 * # Core
 * * Use this method if you need to use pieces of my-layout, but you don't need the entire web component.
 * ## Imports
 * ```typescript
 * import { IMyLayoutComponent,  MyLayoutComponentStyles } from '@quincarter/my-layout/CoreMyLayoutComponent';
 * ```
 *
 * ## Core Usage Example
 * ### Core Interface
 * ```typescript
 * import { LitElement } from 'lit';
 * import { IMyLayoutComponent } from '@quincarter/my-layout/CoreMyLayoutComponent';
 *
 * export class FooBar extends LitElement implements IMyLayoutComponent {
 * // TODO: Implement Interface definition
 * }
 * ```
 *
 * ### Core Styles
 * ```typescript
 * import { LitElement } from 'lit';
 * import { MyLayoutComponentStyles } from '@quincarter/my-layout/CoreMyLayoutComponent';
 *
 * export class BarFoo extends LitElement {
 *     static get styles(): CSSResult[] {
 *         return [
 *             MyLayoutComponentStyles,
 *             css`/* my css here /*`
 *         ];
 *     }
 * }
 * ```
 *
 *
 * @element my-layout
 *
 * @slot - Default slot that the main page content will rest in.
 * @slot layout-header - This is the top slot that rests above the overall content where a header can rest, but it is not required.
 * @slot layout-gutter
 *
 *
 */
export class MyLayoutComponent
  extends LitElement
  implements IMyLayoutComponent
{
  /**
   * Determines the title value of the component
   * @attr my-layout-title
   * @default my-layout works!
   */
  @property({ type: String, attribute: 'my-layout-title' })
  myLayoutTitle: string;

  static get styles(): CSSResult[] {
    return [MyLayoutComponentStyles];
  }

  constructor() {
    super();

    this.myLayoutTitle = 'my-layout works!';
  }

  render(): HTMLTemplateResult {
    return html`
      <slot name="layout-header"></slot>
      <div class="container">
        <slot></slot>
        <slot name="layout-gutter"></slot>
      </div>
      <div class="footer">
        <slot name="layout-footer"></slot>
      </div>
    `;
  }
}
