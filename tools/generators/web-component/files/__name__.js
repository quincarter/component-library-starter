import { LitElement, html } from 'lit';
import { <%=className%>ComponentStyles } from './<%=fileName%>.styles.js';

export class <%=className%>Component extends LitElement {
  static get properties() {
    return {
      <%=propertyName%>Title: { type: String, attribute: '<%=fileName%>-title' },
    };
  }

  static get styles() {
    return [<%=className%>ComponentStyles];
  }

  constructor() {
    super();
    this.<%=propertyName%>Title = "<%=fileName%> works!";
  }

  render() {
    return html`
      <div>
        ${this.<%=propertyName%>Title}
      </div>
    `;
  }
}
