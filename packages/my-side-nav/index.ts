import { MySideNavComponent } from './src/my-side-nav.js';

customElements.get('my-side-nav') ||
  customElements.define('my-side-nav', MySideNavComponent);
