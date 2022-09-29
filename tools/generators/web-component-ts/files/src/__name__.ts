import { LitElement, html, HTMLTemplateResult } from 'lit';
import { property } from 'lit/decorators.js'
import { <%=className%>ComponentStyles } from './<%=fileName%>.styles.js';
import { I<%=className%> } from '../core/<%=className%>.interface';

/**
 * This is a short description of your component. Change me in [./src/<%=fileName%>.ts](./src/<%=fileName%>.ts#L9-39) in the JSDoc above the Component Class.
 *
 * * Updating these docs in the ts file will generate a new README.md file at the package root in the pre-commit hook.
 * * Properties and other items added in JSDoc will be appended below the final line of this JSDoc based on your component Composition.
 * * For more information about what is supported in README generation, [click here](https://github.com/runem/web-component-analyzer)
 *
 * ## Installation
 * ```bash
 * npm i -s @quincarter/<%=fileName%>
 * ```
 * or with `yarn`
 * ```bash
 * yarn add @quincarter/<%=fileName%>
 * ```
 *
 * ## Imports
 * * if you just need the web component as-is
 * ```javascript
 * import '@quincarter/<%=fileName%>';
 * ```
 * * If you need to rename the element for some reason, you can do this:
 * ```javascript
 * import { <%=className%> } from '@quincarter/<%=fileName%>/<%=className%>';
 *
 * // then define the component yourself with a custom tag name
 * customElements.define('foo-my-tag-here-bar', <%=className%>);
 * ```
 *
 * ## Usage
 * ```html
 * <<%=fileName%> my-<%=fileName%>-title="testing this attribute works">
 * </<%=fileName%>>
 * ```
 * @element <%=fileName%>
 * @slot card-slot a slotted element thing goes here
 *
 */
export class <%=className%>Component extends LitElement implements I<%=className%> {
  @property({type: String, attribute: '<%=fileName%>-title'})
  <%=propertyName%>Title: string;

  static get styles() {
    return [<%=className%>ComponentStyles];
  }

  constructor() {
    super();
    this.<%=propertyName%>Title = "<%=fileName%> works!";
  }

  render(): HTMLTemplateResult {
    return html`
      <div class="card">
        <div class="card-title">
          <h1 class="<%=fileName%>-test-color">${this.<%=propertyName%>Title}</h1>
        </div>
        <div class="card-body">
          <p>Your component is located in <code>/packages/<%=fileName%></code> and the component and styles are already separated into their own files.</p>
          <p>This is just a test component generated using the component generator</p>
          <p>Edit the <code><%=fileName%>.ts</code> code or remove this code and use it as your own.</p>
          <slot name="card-slot"></slot>
        </div>
      </div>
    `;
  }
}
