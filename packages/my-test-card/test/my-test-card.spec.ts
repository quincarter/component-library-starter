import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { MyTestCardCard } from '../src/my-test-card';
import '../index.js';

describe('MyTestCardCard', () => {
  let element: MyTestCardCard;
  beforeEach(async () => {
    element = await fixture(html`<my-test-card></my-test-card>`);
  });

  it('renders a card', () => {
    const card = element?.shadowRoot?.querySelector('.card');
    expect(card).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
