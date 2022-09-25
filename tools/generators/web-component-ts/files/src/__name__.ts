import { LitElement, html, HTMLTemplateResult } from 'lit';
import { property } from 'lit/decorators.js'
import { <%=className%>ComponentStyles } from './<%=fileName%>.styles.js';

/**
 * This is a short description of your component. Change me.
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
 * ## Usage
 * ```html
 * <<%=fileName%> my-<%=fileName%>-title="testing this attribute works">
 * </<%=fileName%>>
 * ```
 * @element <%=fileName%>
 * @slot card-slot a slotted element thing goes here
 *
 */
export class <%=className%>Component extends LitElement {
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
