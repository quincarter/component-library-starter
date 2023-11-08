import { html } from 'lit';
import '../lib/index.js';

export default {
  title: 'New/Cards/MyCardTest',
  component: 'my-card-test',
  argTypes: {
    myCardTestTitle: { control: 'text' },
  },
};

function Template({ active, myCardTestTitle }) {
  return html`
    <my-card-test .myCardTestTitle="${myCardTestTitle}"></my-card-test>
  `;
}

export const MyCardTest = Template.bind({});
MyCardTest.args = {
  myCardTestTitle: 'my-card-test works!',
};
