import { html } from 'lit';
import './index.js';

export default {
  title: 'General/Animations',
  component: 'gears-wc',
  argTypes: {
    color: { control: 'color' },
  },
};

function Template({ color }) {
  return html` <gears-wc color="${color}"></gears-wc> `;
}

export const RotatingGears = Template.bind({});
RotatingGears.args = {
  color: '#b7bab8',
};
