import { LitElement, html, HTMLTemplateResult } from 'lit';
import { property } from 'lit/decorators';
import { TestBlahThreeComponentStyles } from './test-blah-three.styles.js';

export class TestBlahThreeComponent extends LitElement {
  @property({ type: String, attribute: 'test-blah-three-title' })
  testBlahThreeTitle: string;

  static get styles() {
    return [TestBlahThreeComponentStyles];
  }

  constructor() {
    super();
    this.testBlahThreeTitle = 'test-blah-three works!';
  }

  render(): HTMLTemplateResult {
    return html`
      <div class="test-blah-three-test-color">${this.testBlahThreeTitle}</div>
    `;
  }
}
