import { LitElement, html } from 'lit';
import { GearsComponentStyles } from './gears-wc.styles.js';

export class GearsComponent extends LitElement {
  static get properties() {
    return {
      color: { type: String, attribute: 'color' },
    };
  }

  static get styles() {
    return [GearsComponentStyles];
  }

  constructor() {
    super();
    this.color = null;
  }

  render() {
    return html`
      <div class="gears" id="two-gears">
        <div class="gears-container">
          <div class="gear-rotate"></div>
          <div class="gear-rotate-left"></div>
        </div>
      </div>
    `;
  }
}
