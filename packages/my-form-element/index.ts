import { MyFormElementButton } from './src/my-form-element.js';

customElements.get('my-form-element') ||
  customElements.define('my-form-element', MyFormElementButton);
