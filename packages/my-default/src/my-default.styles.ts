import { css, CSSResult } from 'lit';

export const MyDefaultComponentStyles: CSSResult = css`
  :host {
    --test-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    --default-card-padding: 2rem;
  }

  .my-default-test-color {
    color: rebeccapurple;
  }
`;
