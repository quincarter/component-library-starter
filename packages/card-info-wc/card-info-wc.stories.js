import { html } from 'lit';
import './index.js';

export default {
  title: 'Components/Informative',
  component: 'card-info-wc',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template() {
  return html` <card-info-wc></card-info-wc> `;
}

export const InfoCard = Template.bind({});
