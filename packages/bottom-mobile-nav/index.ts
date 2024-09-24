import { BottomMobileNavComponent } from './src/bottom-mobile-nav.js';

customElements.get('bottom-mobile-nav') ||
  customElements.define('bottom-mobile-nav', BottomMobileNavComponent);

export { BottomMobileNavComponent };
export default class extends BottomMobileNavComponent {}
