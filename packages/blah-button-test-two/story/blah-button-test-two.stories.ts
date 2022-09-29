import { html } from 'lit';
import '../out-tsc/index.js';

export default {
  title: 'New/TS Components',
  component: 'blah-button-test-two',
  argTypes: {
    blahButtonTestTwoTitle: { control: 'text' },
  },
};

function Template({ active, blahButtonTestTwoTitle }) {
  return html`
    <blah-button-test-two
      .blahButtonTestTwoTitle="${blahButtonTestTwoTitle}"
    ></blah-button-test-two>
  `;
}

export const BlahButtonTestTwo = Template.bind({});
BlahButtonTestTwo.args = {
  blahButtonTestTwoTitle: 'blah-button-test-two works!',
};
