import { MyHeaderComponent } from './src/my-header.js';

customElements.get('my-header') ||
  customElements.define('my-header', MyHeaderComponent);
