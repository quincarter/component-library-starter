import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { TestHereTwoComponent } from '../src/test-here-two';
import '../index.js';

describe('TestHereTwoComponent', () => {
  let element: TestHereTwoComponent;
  beforeEach(async () => {
    element = await fixture(html`<test-here-two></test-here-two>`);
  });

  it('renders an h1', () => {
    const h1 = element?.shadowRoot?.querySelector('h1');
    expect(h1).to.exist;
    expect(h1?.textContent).to.contain('test-here-two');
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
