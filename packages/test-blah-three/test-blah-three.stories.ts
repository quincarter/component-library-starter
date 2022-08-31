import { html } from 'lit';
import './out-tsc/index.js';

export default {
  title: 'Components/Actionable',
  component: 'test-blah-three',
  argTypes: {
    testBlahThreeTitle: { control: 'text' },
  },
};

function Template({ active, testBlahThreeTitle }) {
  return html`
    <test-blah-three
      .testBlahThreeTitle="${testBlahThreeTitle}"
    ></test-blah-three>
  `;
}

export const TestBlahThree = Template.bind({});
TestBlahThree.args = {
  testBlahThreeTitle: 'test-blah-three works!',
};
