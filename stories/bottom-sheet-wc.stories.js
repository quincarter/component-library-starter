import { html } from 'lit';
import '../packages/bottom-sheet-wc/index.js';

export default {
  title: 'Components/Actionable',
  component: 'bottom-sheet-wc',
  argTypes: {
    sheetTitle: { control: 'text' },
  },
};

function Template({ active, sheetTitle }) {
  return html`
    <bottom-sheet-wc
      ?active="${active}"
      .title="${sheetTitle}"
    ></bottom-sheet-wc>
  `;
}

export const BottomSheet = Template.bind({});
BottomSheet.args = {
  active: true,
  sheetTitle: 'This is the bottom Sheet title',
};
