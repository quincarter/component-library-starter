<% if (componentType == "component" || componentType == "card") { %>
export interface I<%=className%><%=componentTypeClass%> {
  <%=propertyName%>Title: string;
}
<% } %>

<% if (componentType == "button") { %>
  export interface I<%=className%><%=componentTypeClass%> {
    buttonTitle: string;
    buttonColor: string;
    buttonDisabled: boolean;
  }
  <% } %>