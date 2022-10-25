import { <%=className%><%=componentTypeClass%> } from './src/<%=fileName%>.js';

if (!customElements.get('<%=fileName%>')) {
  customElements.define('<%=fileName%>', <%=className%><%=componentTypeClass%>);
}
