import { LitElement, html } from 'lit';
import { ScrollerWebComponentStyles } from './scroller-wc.styles.js';

/**
 * @slot This Component contains a slot to drop other elements inside of
 */
export class ScrollerWebComponent extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      showArrows: { type: Boolean, attribute: 'show-arrows' },
    };
  }

  static get styles() {
    return [ScrollerWebComponentStyles];
  }

  constructor() {
    super();
    this.title = 'Change me or leave me blank';
    this.showArrows = false;
  }

  // eslint-disable-next-line class-methods-use-this
  renderArrows() {
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
    return html`<div class="arrow-container">
        ${this.title ? html`<h3 class="header">${this.title}</h3>` : ''}
        ${this.showArrows ? this.renderArrows() : ''}
      </div>
      <div class="container" id="container">
        <slot></slot>
      </div> `;
  }
}
