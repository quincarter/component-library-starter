import { LitElement, html } from 'lit';
import { BottomSheetComponentStyles } from './bottom-sheet-wc.styles.js';

export class BottomSheetComponent extends LitElement {
  static get properties() {
    return {
      title: { type: String, attribute: 'title' },
      active: { type: Boolean, attribute: 'active' },
    };
  }

  static get styles() {
    return [BottomSheetComponentStyles];
  }

  constructor() {
    super();
    this.title = 'This is the bottom Sheet title';
    this.active = false;
  }

  render() {
    return html`
      <div class="bottom-sheet-container ${this.active ? 'active' : ''}">
        <div class="bottom-sheet">
          <div class="title">${this.title}</div>
          <div class="sheet-body">
            <ul>
              <li>
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="guy-mage"
                />
              </li>
              <li>
                <img
                  src="https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png"
                  alt="girl-mage"
                />
              </li>
              <li>
                <img
                  src="https://www.ottawamillhouse.com/wp-content/uploads/2017/05/1.png"
                  alt="guy-mage"
                />
              </li>
              <li>
                <img
                  src="https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar2@2x.png"
                  alt="avatar"
                />
              </li>
              <li>
                <img
                  src="https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar3_big.png"
                  alt="avatar"
                />
              </li>
              <li>
                <img
                  src="https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar4_big@2x.png"
                  alt="avatar"
                />
              </li>
              <li>
                <img
                  src="https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar12_big@2x.png"
                  alt="avatar"
                />
              </li>
              <li>
                <img
                  src="https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar11_big.png"
                  alt="avatar"
                />
              </li>
              <li>
                <img
                  src="https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar10_big@2x.png"
                  alt="avatar"
                />
              </li>
              <li>
                <img
                  src="https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar9_big@2x.png"
                  alt="avatar"
                />
              </li>
            </ul>
            <p class="info-text">
              This is some other informative text in the bottom sheet. Lorem
              ipsum dolor sit
            </p>
          </div>
          <div class="sheet-footer">
            <button type="button">Share</button>
            <button type="button">Edit</button>
            <button type="button">Cancel</button>
          </div>
        </div>
      </div>
    `;
  }
}
