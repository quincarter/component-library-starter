import { html } from 'lit';
import '../index.js';

export default {
  title: 'New/JS Components',
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
