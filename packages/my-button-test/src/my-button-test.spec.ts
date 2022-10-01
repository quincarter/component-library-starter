import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { MyButtonTestButton } from './my-button-test.js';
import '../index.js';

describe('MyButtonTestButton', () => {
  let element: MyButtonTestButton;
  beforeEach(async () => {
    element = await fixture(html`<my-button-test></my-button-test>`);
  });

  it('renders a button', () => {
    const card = element?.shadowRoot?.querySelector('.button');
    expect(card).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
