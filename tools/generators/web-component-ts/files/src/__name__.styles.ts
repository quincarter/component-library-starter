import { css, CSSResult } from 'lit';

export const <%=className%><%=componentTypeClass%>Styles: CSSResult = css`
  :host {
    --test-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    --default-card-padding: 2rem;
  }

  <% if (componentType == "card") { %>
    .card {
    box-shadow: var(--test-box-shadow);
    padding: var(--default-card-padding);
    width: 500px;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .<%=fileName%>-test-color {
    color: rebeccapurple;
  }
  <% } %>

  <% if (componentType == "button") { %>
  .button {
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    padding: 1rem;
    width: fit-content;
  }

  .<%=fileName%>-test-color {
    color: #fff;
  }
  <% } %>

  <% if (componentType == "component") { %>
  .<%=fileName%>-test-color {
    color: rebeccapurple;
  }
  <% } %>
`;
