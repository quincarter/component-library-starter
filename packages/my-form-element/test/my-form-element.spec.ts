import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { MyFormElementButton } from '../src/my-form-element';
import '../index.js';

describe('MyFormElementButton', () => {
  let element: MyFormElementButton;
  beforeEach(async () => {
    element = await fixture(html`<my-form-element></my-form-element>`);
  });

  it('renders a button', () => {
    const card = element?.shadowRoot?.querySelector('.button');
    expect(card).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
