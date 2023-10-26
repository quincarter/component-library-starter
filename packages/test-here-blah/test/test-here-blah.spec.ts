import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { TestHereBlahComponent } from '../src/test-here-blah';
import '../index.js';

describe('TestHereBlahComponent', () => {
  let element: TestHereBlahComponent;
  beforeEach(async () => {
    element = await fixture(html`<test-here-blah></test-here-blah>`);
  });

  it('renders an h1', () => {
    const h1 = element?.shadowRoot?.querySelector('h1');
    expect(h1).to.exist;
    expect(h1?.textContent).to.contain('test-here-blah');
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
