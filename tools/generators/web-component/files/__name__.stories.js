import { html } from 'lit';
import './index.js';

export default {
  title: 'Components/Actionable',
  component: '<%=fileName%>',
  argTypes: {
    <%=propertyName%>Title: { control: 'text' },
  },
};

function Template({ active, <%=propertyName%>Title }) {
  return html`
    <<%=fileName%>
      ?active="${active}"
      .<%=propertyName%>Title="${<%=propertyName%>Title}"
    ></<%=fileName%>>
  `;
}

export const <%=className%> = Template.bind({});
<%=className%>.args = {
  active: true,
  <%=propertyName%>Title: '<%=fileName%> works!',
};
