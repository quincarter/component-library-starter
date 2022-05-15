import { LitElement, html } from 'lit';
import { CardInfoWebComponentStyles } from './card-info-wc.styles.js';

/**
 * @slot This Component contains a slot to drop other elements inside of
 */
export class CardInfoWebComponent extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      showArrows: { type: Boolean, attribute: 'show-arrows' },
    };
  }

  static get styles() {
    return [CardInfoWebComponentStyles];
  }

  constructor() {
    super();
    this.title = 'Change me or leave me blank';
    this.showArrows = false;
  }

  static renderArrows() {
    return html` <i
        id="left-arrow"
        href="#"
        onclick="leftArrowClick()"
        class="left-arrow"
      ></i>
      <i
        id="right-arrow"
        onclick="rightArrowClick()"
        href="#"
        class="right-arrow"
      ></i>`;
  }

  render() {
    return html`
      <div class="card">
        <span class="status-bar-color"></span>
        <div class="card-header">
          <span class="card-header-item">Testing - first card</span>
        </div>
        <div class="card-body">
          <p class="long-name">Some long name</p>
          <p class="description">with description</p>
        </div>
      </div>
    `;
  }
}
