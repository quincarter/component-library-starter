import { html } from 'lit';
import '../lib/index.js';

export default {
  title: 'New/Cards',
  component: 'my-test-card',
  argTypes: {
    myTestCardTitle: { control: 'text' },
  },
};

function Template({ active, myTestCardTitle }) {
  return html`
    <my-test-card .myTestCardTitle="${myTestCardTitle}"></my-test-card>
  `;
}

export const MyTestCard = Template.bind({});
MyTestCard.args = {
  myTestCardTitle: 'my-test-card works!',
};
