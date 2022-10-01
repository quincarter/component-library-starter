import { html } from 'lit';
import '../lib/index.js';

export default {
  title: 'New/Buttons',
  component: 'my-button-test',
  argTypes: {
    myButtonTestTitle: { control: 'text' },
  },
};

function Template({ active, myButtonTestTitle }) {
  return html`
    <my-button-test .myButtonTestTitle="${myButtonTestTitle}"></my-button-test>
  `;
}

export const MyButtonTest = Template.bind({});
MyButtonTest.args = {
  myButtonTestTitle: 'my-button-test works!',
};
