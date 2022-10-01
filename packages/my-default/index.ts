import { MyDefaultComponent } from './src/my-default.js';

if (!customElements.get('my-default')) {
  customElements.define('my-default', MyDefaultComponent);
}
