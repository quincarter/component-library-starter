import { <%=className%><%=componentTypeClass%> } from './src/<%=fileName%>.js';

customElements.get('<%=fileName%>') ||
  customElements.define('<%=fileName%>', <%=className%><%=componentTypeClass%>);

  export { <%=className%><%=componentTypeClass%> }
  export default class extends <%=className%><%=componentTypeClass%> {}
