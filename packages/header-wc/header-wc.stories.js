import { html } from 'lit';
import './index.js';

export default {
  title: 'General/Layout/Header',
  component: 'header-wc',
  argTypes: {
    leftSlot: { control: 'text', name: 'slot="left"' },
    middleSlot: { control: 'text', name: 'slot="middle"' },
    rightSlot: { control: 'text', name: 'slot="right"' },
  },
};

function Template({ leftSlot, middleSlot, rightSlot }) {
  return html`
    <header-wc>
      <div slot="left">${leftSlot}</div>
      <div slot="middle">${middleSlot}</div>
      <div slot="right">${rightSlot}</div>
    </header-wc>
  `;
}

export const Header = Template.bind({});
Header.args = {
  leftSlot: 'Left Slot',
  middleSlot: null,
  rightSlot: 'Right Slot',
};
