import { MyTestCardCard } from './src/my-test-card.js';

customElements.get('my-test-card') ||
  customElements.define('my-test-card', MyTestCardCard);
