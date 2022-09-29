import { SomeButtonComponent } from './src/some-button.js';

if (!customElements.get('some-button')) {
  customElements.define('some-button', SomeButtonComponent);
}
