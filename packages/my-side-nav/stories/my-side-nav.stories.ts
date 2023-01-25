import { html } from 'lit';
import '../lib/index.js';
import '@quincarter/my-card-test';

export default {
  title: 'New/Components',
  component: 'my-side-nav',
};

const Template = ({ ...args }) => {
  return html`
    <style>
      .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    </style>
    <my-side-nav .navLinks="${args.navLinks}">
      <h1>Some Title Here</h1>
      <p>Some content here</p>
      <div class="container">
        <my-card-test my-card-test-title="some title here"></my-card-test>
        <my-card-test my-card-test-title="some title here2"></my-card-test>
        <my-card-test my-card-test-title="some title here3"></my-card-test>
        <my-card-test my-card-test-title="some title here4"></my-card-test>
        <my-card-test my-card-test-title="some title here5"></my-card-test>
        <my-card-test my-card-test-title="some title here1"></my-card-test>
        <my-card-test my-card-test-title="some title here2"></my-card-test>
        <my-card-test my-card-test-title="some title here3"></my-card-test>
        <my-card-test my-card-test-title="some title here3"></my-card-test>
        <my-card-test my-card-test-title="some title here41"></my-card-test>
        <my-card-test my-card-test-title="some title here2"></my-card-test>
        <my-card-test my-card-test-title="some title here2"></my-card-test>
        <my-card-test my-card-test-title="some title here3"></my-card-test>
        <my-card-test my-card-test-title="some title here32"></my-card-test>
      </div>
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
