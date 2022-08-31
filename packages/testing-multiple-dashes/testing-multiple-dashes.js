import { LitElement, html } from 'lit';
import { TestingMultipleDashesComponentStyles } from './testing-multiple-dashes.styles.js';

export class TestingMultipleDashesComponent extends LitElement {
  static get properties() {
    return {
      testingMultipleDashesTitle: {
        type: String,
        attribute: 'testing-multiple-dashes-title',
      },
    };
  }

  static get styles() {
    return [TestingMultipleDashesComponentStyles];
  }

  constructor() {
    super();
    this.testingMultipleDashesTitle = 'testing-multiple-dashes works!';
  }

  render() {
    return html` <div>${this.testingMultipleDashesTitle}</div> `;
  }
}
