import { <%=className%><%=componentTypeClass%> } from './src/<%=fileName%>.js';

customElements.get('<%=fileName%>') ||
  customElements.define('<%=fileName%>', <%=className%><%=componentTypeClass%>);
