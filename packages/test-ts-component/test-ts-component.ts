import { LitElement, html, HTMLTemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { TestTsComponentComponentStyles } from './test-ts-component.styles.js';

export class TestTsComponentComponent extends LitElement {
  @property({ type: String, attribute: 'test-ts-component-title' })
  testTsComponentTitle: string;

  static get styles() {
    return [TestTsComponentComponentStyles];
  }

  constructor() {
    super();
    this.testTsComponentTitle = 'test-ts-component works!';
  }

  render(): HTMLTemplateResult {
    return html`
      <div class="card">
        <div class="card-title">
          <h1 class="test-ts-component-test-color">
            ${this.testTsComponentTitle}
          </h1>
        </div>
        <div class="card-body">
          <p>
            Your component is located in
            <code>/packages/test-ts-component</code> and the component and
            styles are already separated into their own files.
          </p>
          <p>
            This is just a test component generated using the component
            generator
          </p>
          <p>
            Edit the <code>test-ts-component.ts</code> code or remove this code
            and use it as your own.
          </p>
        </div>
      </div>
    `;
  }
}
