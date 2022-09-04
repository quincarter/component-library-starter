import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../index.js';

describe('<%=className%>', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<<%=fileName%>></<%=fileName%>>`);
  });

  it('renders a card', () => {
    const card = element.shadowRoot.querySelector('.card');
    expect(card).to.exist;
  });

  it('renders an h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.contain('<%=fileName%>');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
