import { MyCardTestCard } from './src/my-card-test.js';

customElements.get('my-card-test') ||
  customElements.define('my-card-test', MyCardTestCard);
