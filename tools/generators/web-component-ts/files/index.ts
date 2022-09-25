import { <%=className%>Component } from './src/<%=fileName%>.js';

if (!customElements.get('<%=fileName%>')) {
  customElements.define('<%=fileName%>', <%=className%>Component);
}
