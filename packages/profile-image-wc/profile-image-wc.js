import { LitElement, html } from 'lit';
import { ProfileImageComponentStyles } from './profile-image-wc.styles.js';

export class ProfileImageComponent extends LitElement {
  static get properties() {
    return {
      src: { type: String, attribute: 'src' },
      width: { type: String, attribute: 'width' },
      height: { type: String, attribute: 'height' },
      shape: { type: String, attribute: 'shape' },
      profileBorder: { type: Boolean, attribute: 'profile-border' },
      accentColor: { type: String, attribute: 'accent-color' },
    };
  }

  static get styles() {
    return [ProfileImageComponentStyles];
  }

  constructor() {
    super();
    this.src = './profile-transparent.png.png';
    this.width = 'unset';
    this.height = 'unset';
    this.shape = null;
    this.profileBorder = false;
    this.accentColor = null;
  }

  render() {
    return html`
      <div
        class="profile-image-container ${this.profileBorder
          ? 'profile-border'
          : ''}"
      >
        <img
          class="profile-image ${this.shape}"
          src="${this.src}"
          alt="guy pic"
          style="width: ${this.width}; height: ${this.height};
          ${this.accentColor ? `background-color: ${this.accentColor};` : ''}"
        />
      </div>
    `;
  }
}
