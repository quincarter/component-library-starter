import { TestHereTwoComponent } from './src/test-here-two.js';

customElements.get('test-here-two') ||
  customElements.define('test-here-two', TestHereTwoComponent);

export { TestHereTwoComponent };
export default class extends TestHereTwoComponent {}
