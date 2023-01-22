import { html } from 'lit';
import '../lib/index.js';

export default {
  title: 'New/Components',
  component: 'my-side-nav',
  argTypes: {
    mySideNavTitle: { control: 'text' },
  },
};

function Template({ active, mySideNavTitle }) {
  return html`
    <my-side-nav></my-side-nav>
  `;
}

export const MySideNav = Template.bind({});
MySideNav.args = {
  mySideNavTitle: 'my-side-nav works!',
};
