import { html } from 'lit';
import './index.js';

export default {
  title: 'Components/Actionable',
  component: 'scroller-wc',
  argTypes: {
    showArrows: { control: 'boolean' },
  },
};

function Template({ showArrows }) {
  return html` <scroller-wc ?show-arrows="${showArrows}"> </scroller-wc> `;
}

export const HorizontalScroller = Template.bind({});
HorizontalScroller.args = {
  showArrows: true,
};
