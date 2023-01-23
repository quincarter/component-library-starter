import { html } from 'lit';
import '../lib/index.js';

export default {
  title: 'New/Components',
  component: 'my-side-nav',
};

const Template = ({ ...args }) => {
  return html`
    <my-side-nav .navLinks="${args.navLinks}">
      <h1>Some Title Here</h1>
      <p>Some content here</p>
    </my-side-nav>
  `;
};

export const MySideNav = Template.bind({});

MySideNav.args = {
  navLinks: [
    {
      name: 'Architecture',
      link: 'systesms',
      icon: 'fa-dashboard',
    },
    {
      name: 'My Systems',
      link: 'mysystems',
      icon: 'fa-home',
      children: [
        {
          name: 'Onboarding',
          link: 'onboarding',
          icon: 'fa-person',
        },
        {
          name: 'Release',
          link: 'release',
          icon: 'fa-book',
        },
      ],
    },
    {
      name: 'Yo a new link',
      link: 'newLink',
      icon: 'fa-link',
      children: [
        {
          name: 'Another Name',
          link: 'somePlace',
          icon: 'fa-blah',
        },
        {
          name: 'something else',
          link: 'blah',
          icon: 'fa-person',
        },
      ],
    },
  ],
};
