import { html } from 'lit';
import './out-tsc/index.js';

export default {
  title: 'New/TS Components',
  component: 'test-ts-component',
  argTypes: {
    testTsComponentTitle: { control: 'text' },
  },
};

function Template({ active, testTsComponentTitle }) {
  return html`
    <test-ts-component
      .testTsComponentTitle="${testTsComponentTitle}"
    ></test-ts-component>
  `;
}

export const TestTsComponent = Template.bind({});
TestTsComponent.args = {
  testTsComponentTitle: 'test-ts-component works!',
};
