import { html } from 'lit';
import '../lib/index.js';

export default {
  title: 'New/Buttons',
  component: 'my-form-element',
  argTypes: {
    myFormElementTitle: { control: 'text' },
  },
};

function Template({ active, myFormElementTitle }) {
  return html`
    <my-form-element
      .myFormElementTitle="${myFormElementTitle}"
    ></my-form-element>
  `;
}

export const MyFormElement = Template.bind({});
MyFormElement.args = {
  myFormElementTitle: 'my-form-element works!',
};
