/* eslint-disable class-methods-use-this */
import { LitElement, html } from 'lit';
import { FabComponentStyles } from './fab-wc.styles.js';

export class FabComponent extends LitElement {
  static get properties() {
    return {
      icon: { type: String, attribute: 'icon' },
    };
  }

  static get styles() {
    return [FabComponentStyles];
  }

  constructor() {
    super();
    this.icon = 'plus';
  }

  buttonPressed() {
    const evt = new CustomEvent('fabClicked', {
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(evt);
  }

  render() {
    return html`
      <div class="fab-container">
        <button class="fab-button" @click="${this.buttonPressed}">+</button>
      </div>
    `;
  }
}
