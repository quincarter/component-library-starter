import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { MySideNavComponent } from '../src/my-side-nav';
import '../index.js';

describe('MySideNavComponent', () => {
  let element: MySideNavComponent;
  beforeEach(async () => {
    element = await fixture(html`<my-side-nav></my-side-nav>`);
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
