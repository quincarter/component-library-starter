import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { BlahButtonTestTwoComponent } from './blah-button-test-two.js';
import '../index.js';

describe('BlahButtonTestTwo', () => {
  let element: BlahButtonTestTwoComponent;
  beforeEach(async () => {
    element = await fixture(
      html`<blah-button-test-two></blah-button-test-two>`
    );
  });

  it('renders a card', () => {
    const card = element?.shadowRoot?.querySelector('.card');
    expect(card).to.exist;
  });

  it('renders an h1', () => {
    const h1 = element?.shadowRoot?.querySelector('h1');
    expect(h1).to.exist;
    expect(h1?.textContent).to.contain('blah-button-test-two');
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});