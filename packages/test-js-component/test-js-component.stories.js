import { html } from 'lit';
import './index.js';

export default {
  title: 'New/JS Components',
  component: 'test-js-component',
  argTypes: {
    testJsComponentTitle: { control: 'text' },
  },
};

function Template({ active, testJsComponentTitle }) {
  return html`
    <test-js-component
      .testJsComponentTitle="${testJsComponentTitle}"
    ></test-js-component>
  `;
}

export const TestJsComponent = Template.bind({});
TestJsComponent.args = {
  testJsComponentTitle: 'test-js-component works!',
};
