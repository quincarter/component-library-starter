import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { FancyAccordionComponent } from './fancy-accordion.js';
import '../index.js';

describe('FancyAccordion', () => {
  let element: FancyAccordionComponent;
  beforeEach(async () => {
    element = await fixture(html`<fancy-accordion></fancy-accordion>`);
  });

  it('renders a card', () => {
    const card = element?.shadowRoot?.querySelector('.card');
    expect(card).to.exist;
  });

  it('renders an h1', () => {
    const h1 = element?.shadowRoot?.querySelector('h1');
    expect(h1).to.exist;
    expect(h1?.textContent).to.contain('fancy-accordion');
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
