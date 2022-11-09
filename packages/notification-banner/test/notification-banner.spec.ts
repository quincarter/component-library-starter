import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { NotificationBannerComponent } from '../src/notification-banner';
import '../index.js';

describe('NotificationBannerComponent', () => {
  let element: NotificationBannerComponent;
  beforeEach(async () => {
    element = await fixture(html`<notification-banner></notification-banner>`);
  });

  it('renders an h1', () => {
    const h1 = element?.shadowRoot?.querySelector('.banner');
    expect(h1).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
