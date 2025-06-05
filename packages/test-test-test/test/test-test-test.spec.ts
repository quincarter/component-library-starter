import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { TestTestTestComponent } from '../src/test-test-test';
import '../index.js';

describe('TestTestTestComponent', () => {
  let element: TestTestTestComponent;
  beforeEach(async () => {
    element = await fixture(html`<test-test-test></test-test-test>`);
  });

  it('renders an h1', () => {
    const h1 = element?.shadowRoot?.querySelector('h1');
    expect(h1).to.exist;
    expect(h1?.textContent).to.contain('test-test-test');
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
