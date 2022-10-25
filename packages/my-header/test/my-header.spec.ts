import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { MyHeaderComponent } from '../src/my-header';
import '../index.js';

describe('MyHeaderComponent', () => {
  let element: MyHeaderComponent;
  beforeEach(async () => {
    element = await fixture(html`<my-header></my-header>`);
  });

  it('renders an h1', () => {
    const h1 = element?.shadowRoot?.querySelector('h1');
    expect(h1).to.exist;
    expect(h1?.textContent).to.contain('my-header');
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
