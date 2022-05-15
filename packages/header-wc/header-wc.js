import { LitElement, html } from 'lit';
import { HeaderComponentStyles } from './header-wc.styles.js';

export class HeaderComponent extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return [HeaderComponentStyles];
  }

  render() {
    return html`
      <div class="header-container">
        <slot name="left"></slot>
        <slot name="middle"></slot>
        <slot name="right"></slot>
      </div>
    `;
  }
}
