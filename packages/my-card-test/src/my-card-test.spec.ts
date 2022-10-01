import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { MyCardTestCard } from './my-card-test.js';
import '../index.js';

describe('MyCardTestCard', () => {
  let element: MyCardTestCard;
  beforeEach(async () => {
    element = await fixture(html`<my-card-test></my-card-test>`);
  });

  it('renders a card', () => {
    const card = element?.shadowRoot?.querySelector('.card');
    expect(card).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
