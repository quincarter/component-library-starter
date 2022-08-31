import { html } from 'lit';
import './index.js';

export default {
  title: 'Components/Actionable',
  component: 'fab-wc',
  argTypes: {
    sheetTitle: { control: 'text' },
  },
};

function Template({ icon }) {
  return html` <fab-wc icon="${icon}"></fab-wc> `;
}

export const Fab = Template.bind({});
Fab.args = {};
