import { TemplateResult, html } from 'lit';
import '../lib/index.js';

export default {
  title: 'New/<%=componentTypeClass%>s/<%=className%>',
  component: '<%=fileName%>',
  argTypes: {
    <%=propertyName%>Title: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>
}

interface ArgTypes {
  <%=propertyName%>Title: string;
}

const <%=className%>Template: Story<ArgTypes> = ({ <%=propertyName%>Title }) => html`
<<%=fileName%>
  .<%=propertyName%>Title="${<%=propertyName%>Title}"
></<%=fileName%>>
`;

export const <%=className%> = <%=className%>Template.bind({});
<%=className%>.args = {
  <%=propertyName%>Title: '<%=fileName%> works!',
};
