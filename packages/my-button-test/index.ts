import { MyButtonTestButton } from './src/my-button-test.js';

if (!customElements.get('my-button-test')) {
  customElements.define('my-button-test', MyButtonTestButton);
}
