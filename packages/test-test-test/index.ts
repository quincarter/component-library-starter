import { TestTestTestComponent } from './src/test-test-test.js';

customElements.get('test-test-test') ||
  customElements.define('test-test-test', TestTestTestComponent);

export { TestTestTestComponent };
export default class extends TestTestTestComponent {}
