import { TestHereBlahComponent } from './src/test-here-blah.js';

customElements.get('test-here-blah') ||
  customElements.define('test-here-blah', TestHereBlahComponent);

export { TestHereBlahComponent };
export default class extends TestHereBlahComponent {}
