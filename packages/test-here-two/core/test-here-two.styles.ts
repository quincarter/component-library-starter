import { css, CSSResultOrNative } from 'lit';

export const TestHereTwoComponentStyles: CSSResultOrNative = css`
  :host {
    --test-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    --default-card-padding: 2rem;
  }

  .test-here-two-test-color {
    color: rebeccapurple;
  }
`;
