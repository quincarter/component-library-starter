import { LitElement, html, HTMLTemplateResult } from 'lit';
import { property } from 'lit/decorators'
import { <%=className%>ComponentStyles } from './<%=fileName%>.styles.js';

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
        </div>
      </div>
    `;
  }
}
