import { css, CSSResult } from 'lit';

export const MyLayoutComponentStyles: CSSResult = css`
  :host {
    --test-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    --default-card-padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  ::slotted(*[slot='layout-gutter']) {
    padding-inline: 1rem;
    justify-content: left;
  }

  .container {
    outline: rebeccapurple;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media only screen and (min-width: 69.43em) {
    .container {
      display: grid;
      grid-template-columns: 5fr 1fr;
    }
  }
`;
