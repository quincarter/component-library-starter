import { html } from 'lit';
import '../lib/index.js';

export default {
  title: 'New/Components',
  component: 'my-default',
  argTypes: {
    myDefaultTitle: { control: 'text' },
  },
};

function Template({ active, myDefaultTitle }) {
  return html` <my-default .myDefaultTitle="${myDefaultTitle}"></my-default> `;
}

export const MyDefault = Template.bind({});
MyDefault.args = {
  myDefaultTitle: 'my-default works!',
};
