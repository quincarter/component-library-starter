import { html } from 'lit';
import '../packages/scroller-wc/dist/@hello-world/scroller-wc.cjs.js';

export default {
  title: 'ScrollerWebComponent',
  component: 'scroller-wc',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <hello-world
      style="--hello-world-background-color: ${backgroundColor || 'white'}"
      .title="${title}d"
    >
    </hello-world>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
