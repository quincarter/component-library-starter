import { html } from 'lit';
import '../packages/bottom-sheet-wc/index.js';

export default {
  title: 'BottomSheet',
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

export const App = Template.bind({});
App.args = {
  active: true,
  sheetTitle: 'This is the bottom Sheet title',
};
