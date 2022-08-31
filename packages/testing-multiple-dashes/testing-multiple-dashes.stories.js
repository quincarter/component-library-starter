import { html } from 'lit';
import './index.js';

export default {
  title: 'Components/Actionable',
  component: 'testing-multiple-dashes',
  argTypes: {
    testingMultipleDashesTitle: { control: 'text' },
  },
};

function Template({ active, testingMultipleDashesTitle }) {
  return html`
    <testing-multiple-dashes
      ?active="${active}"
      .testingMultipleDashesTitle="${testingMultipleDashesTitle}"
    ></testing-multiple-dashes>
  `;
}

export const TestingMultipleDashes = Template.bind({});
TestingMultipleDashes.args = {
  active: true,
  testingMultipleDashesTitle: 'testing-multiple-dashes works!',
};
