import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { MyDefaultComponent } from './my-default.js';
import '../index.js';

describe('MyDefaultComponent', () => {
  let element: MyDefaultComponent;
  beforeEach(async () => {
    element = await fixture(html`<my-default></my-default>`);
  });

  it('renders an h1', () => {
    const h1 = element?.shadowRoot?.querySelector('h1');
    expect(h1).to.exist;
    expect(h1?.textContent).to.contain('my-default');
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
