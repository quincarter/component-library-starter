import { LitElement, html } from 'lit';
import { TestJsComponentComponentStyles } from './test-js-component.styles.js';

export class TestJsComponentComponent extends LitElement {
  static get properties() {
    return {
      testJsComponentTitle: {
        type: String,
        attribute: 'test-js-component-title',
      },
    };
  }

  static get styles() {
    return [TestJsComponentComponentStyles];
  }

  constructor() {
    super();
    this.testJsComponentTitle = 'test-js-component works!';
  }

  render() {
    return html`
      <div class="card">
        <div class="card-title">
          <h1 class="test-js-component-test-color">
            ${this.testJsComponentTitle}
          </h1>
        </div>
        <div class="card-body">
          <p>
            Your component is located in
            <code>/packages/test-js-component</code> and the component and
            styles are already separated into their own files.
          </p>
          <p>
            This is just a test component generated using the component
            generator
          </p>
          <p>
            Edit the <code>test-js-component.js</code> code or remove this code
            and use it as your own.
          </p>
        </div>
      </div>
    `;
  }
}
