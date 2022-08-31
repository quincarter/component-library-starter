/* eslint-disable class-methods-use-this */
import { LitElement, html } from 'lit';
import { BottomSheetComponentStyles } from './bottom-sheet-wc.styles.js';

export class BottomSheetComponent extends LitElement {
  static get properties() {
    return {
      title: { type: String, attribute: 'title' },
      active: { type: Boolean, attribute: 'active' },
      buttons: { type: Array, attribute: 'buttons' },
      infoText: { type: String, attribute: 'info-text' },
    };
  }

  static get styles() {
    return [BottomSheetComponentStyles];
  }

  constructor() {
    super();
    this.title = 'This is the bottom Sheet title';
    this.active = false;
    this.buttons = [];
    this.infoText = null;
  }

  buttonPressed(event) {
    console.log('cancel event method', event);
    const cancelEvent = new CustomEvent('cancel', {
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(cancelEvent);
  }

  render() {
    return html`
      <div class="bottom-sheet-container ${this.active ? 'active' : ''}">
        <div class="bottom-sheet">
          <div class="title">${this.title}</div>
          <div class="sheet-body">
            <slot name="top-slot"></slot>
            ${this.infoText
              ? html`<p class="info-text">${this.infoText}</p>`
              : ''}
            <slot name="bottom-slot"></slot>
          </div>
          <div class="sheet-footer">
            ${!this.buttons?.length
              ? ''
              : this.buttons.map(
                  button =>
                    html`
                      <button
                        type="${!button?.type ? 'button' : button.type}"
                        @click="${() => this.buttonPressed(button.name)}"
                      >
                        ${button.name}
                      </button>
                    `
                )}
          </div>
        </div>
      </div>
    `;
  }
}
