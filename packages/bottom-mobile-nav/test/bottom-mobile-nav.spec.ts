import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { BottomMobileNavComponent } from '../src/bottom-mobile-nav';
import '../index.js';
import { NavItem } from '../core/BottomMobileNav.interface';

describe('BottomMobileNavComponent - Empty State', () => {
  let element: BottomMobileNavComponent;
  beforeEach(async () => {
    element = await fixture(html`<bottom-mobile-nav></bottom-mobile-nav>`);
  });

  it('renders nothing because no items passed in', () => {
    const bottomNavOuterDiv = element?.shadowRoot?.querySelector('.bottom-nav');
    expect(bottomNavOuterDiv).to.not.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});

describe('BottomMobileNavComponent - Happy State', () => {
  let element: BottomMobileNavComponent;
  const navItems: NavItem[] = [
    {
      name: 'Test 1',
      path: '/test1',
    },
    {
      name: 'Test 2',
      path: '/test2',
    },
    {
      name: 'Test 3',
      path: '/test3',
    },
  ];
  beforeEach(async () => {
    element = await fixture(
      html`<bottom-mobile-nav .navItems="${navItems}"></bottom-mobile-nav>`,
    );
  });

  it('renders bottom because items are present', () => {
    const bottomNavOuterDiv = element?.shadowRoot?.querySelector('.bottom-nav');
    expect(bottomNavOuterDiv).to.exist;
    expect(bottomNavOuterDiv?.textContent).to.contain('Test 3');
  });

  it('passes the a11y audit', async () => {
    await expect(element)?.shadowDom?.to.be.accessible();
  });
});
