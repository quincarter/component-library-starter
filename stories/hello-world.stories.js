import { html } from 'lit';
import '../packages/hello-world/dist/@hello-world/hello-world.esm.js';

export default {
  title: 'HelloWorld',
  component: 'hello-world',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <hello-world
      style="--hello-world-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </hello-world>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
