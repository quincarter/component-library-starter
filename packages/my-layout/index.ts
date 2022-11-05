import { MyLayoutComponent } from './src/my-layout.js';

customElements.get('my-layout') ||
  customElements.define('my-layout', MyLayoutComponent);
