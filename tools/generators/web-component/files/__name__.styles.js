import { css } from 'lit';

export const <%=className%>ComponentStyles = css`
  :host {
    --test-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    --default-card-padding: 2rem;
  }

  .card {
    box-shadow: var(--test-box-shadow);
    padding: var(--default-card-padding);
    width: 300px;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .<%=fileName%>-test-color {
    color: rebeccapurple;
  }
`;
