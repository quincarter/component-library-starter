import { html } from 'lit';
import './out-tsc/index.js';

export default {
  title: 'Components/New',
  component: '<%=fileName%>',
  argTypes: {
    <%=propertyName%>Title: { control: 'text' },
  },
};

function Template({ active, <%=propertyName%>Title }) {
  return html`
    <<%=fileName%>
      .<%=propertyName%>Title="${<%=propertyName%>Title}"
    ></<%=fileName%>>
  `;
}

export const <%=className%> = Template.bind({});
<%=className%>.args = {
  <%=propertyName%>Title: '<%=fileName%> works!',
};
