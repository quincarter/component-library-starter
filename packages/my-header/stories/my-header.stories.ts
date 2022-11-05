import { html } from 'lit';
import '../lib/index.js';

export default {
  title: 'New/Components',
  component: 'my-header',
  argTypes: {
    myHeaderTitle: { control: 'text' },
  },
};

function Template({ active, myHeaderTitle }) {
  return html`
    <my-header>
      <div slot="start">Start slot</div>
      <div slot="middle">
        <input type="search" />
      </div>
      <div slot="end">user stuff</div>
    </my-header>
  `;
}

export const MyHeader = Template.bind({});
MyHeader.args = {
  myHeaderTitle: 'my-header works!',
};
