import { html } from 'lit';
import '../out-tsc/index.js';

export default {
  title: 'New/TS Components',
  component: 'some-button',
  argTypes: {
    someButtonTitle: { control: 'text' },
  },
};

function Template({ active, someButtonTitle }) {
  return html`
    <some-button .someButtonTitle="${someButtonTitle}"></some-button>
  `;
}

export const SomeButton = Template.bind({});
SomeButton.args = {
  someButtonTitle: 'some-button works!',
};
