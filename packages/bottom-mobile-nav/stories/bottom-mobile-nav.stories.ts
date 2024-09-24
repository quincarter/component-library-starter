import { TemplateResult, html } from 'lit';
import '../lib/index.js';
import { NavItem } from '../lib/core/BottomMobileNav.interface.js';

export default {
  title: 'New/Components/BottomMobileNav',
  component: 'bottom-mobile-nav',
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  navItems: NavItem[];
}

const BottomMobileNavTemplate: Story<ArgTypes> = ({ navItems }) => html`
  <div>Stuff above the bottom nav!</div>
  <bottom-mobile-nav .navItems="${navItems}"></bottom-mobile-nav>
`;

export const BottomMobileNav = BottomMobileNavTemplate.bind({});
BottomMobileNav.args = {
  navItems: [
    {
      name: 'Home',
      path: '/home',
      directory: 'home-page',
      component: 'home-page',
      filePath: '../../views/home-page/home-page.ts',
      levelOfAccess: ['public'],
      tagName: 'home-page',
      icon: 'home',
    },
    {
      name: 'Example Detail Page',
      path: '/details123',
      directory: 'detail-page',
      component: 'detail-page',
      filePath: '../../views/detail-page/detail-page.ts',
      levelOfAccess: ['private'],
      tagName: 'detail-page',
      icon: 'list',
    },
  ],
};
