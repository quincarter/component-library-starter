import { LitElement, html, HTMLTemplateResult } from 'lit';
import { property } from 'lit/decorators.js'
import { <%=className%><%=componentTypeClass%>Styles } from './<%=fileName%>.styles.js';
import { I<%=className%><%=componentTypeClass%> } from '../core/<%=className%>.interface';

/**
 * This is a short description of your component. Change me in [./src/<%=fileName%>.ts](./src/<%=fileName%>.ts#L6-42) in the JSDoc above the Component Class.
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
 * <% if (componentType != "component") { %>
 * @slot card-slot a slotted element thing goes here
 * <% } %>
 *
 */
export class <%=className%><%=componentTypeClass%> extends LitElement implements I<%=className%><%=componentTypeClass%> {
  <% if (componentType == "component" || componentType == "card") { %>
    @property({type: String, attribute: '<%=fileName%>-title'})
    <%=propertyName%>Title: string;
  <% } %>
  <% if (componentType == "button") { %>
    @property({type: String, attribute: '<%=componentType%>-title'})
    <%=componentType%>Title: string;

    @property({type: Boolean, attribute: '<%=componentType%>-disabled'})
    <%=componentType%>Disabled = false;

    @property({type: String, attribute: '<%=componentType%>-color'})
    <%=componentType%>Color: string;
  <% } %>

  static get styles() {
    return [
      <%=className%><%=componentTypeClass%>Styles
    ];
  }

  constructor() {
    super();
    <% if (componentType == "component" || componentType == "card") { %>
      this.<%=propertyName%>Title = "<%=fileName%> works!";
    <% } %>

    <% if (componentType == "button") { %>
      this.<%=componentType%>Title = "<%=fileName%> works!";
      this.<%=componentType%>Color = "rebeccapurple";
    <% } %>
  }

  render(): HTMLTemplateResult {
    return html`
      <% if (componentType == "component") { %> 
        <h1 class="<%=fileName%>-test-color">${this.<%=propertyName%>Title}</h1>
        <div>
          <p>Your component is located in <code>/packages/<%=fileName%></code> and the component and styles are already separated into their own files.</p>
          <p>This is just a test component generated using the component generator</p>
          <p>Edit the <code><%=fileName%>.ts</code> code or remove this code and use it as your own.</p>
        </div>
      <% } %>
      <% if (componentType == "card") { %> 
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
      <% } %>
      <% if (componentType == "button") { %> 
        <div class="button-container">
          <button class="button <%=fileName%>-test-color" style="background-color: ${this.buttonColor};">${this.<%=componentType%>Title}</button>
        </div>
      <% } %>
    `;
  }
}
