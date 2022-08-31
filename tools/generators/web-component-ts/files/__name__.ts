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
      <div class="<%=fileName%>-test-color">
        ${this.<%=propertyName%>Title}
      </div>
    `;
  }
}
