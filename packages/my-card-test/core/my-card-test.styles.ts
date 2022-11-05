import { css, CSSResult } from 'lit';

export const MyCardTestCardStyles: CSSResult = css`
  :host {
    --test-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    --default-card-padding: 2rem;
    --background-primary: #fff;
    --font-color-primary: #000;
    --title-primary: rebeccapurple;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --title-primary: #ca9ae9;
      --background-primary: #494545;
      --font-color-primary: #fff;
    }
  }

  .card {
    background-color: var(--background-primary);
    box-shadow: var(--test-box-shadow);
    color: var(--font-color-primary);
    padding: var(--default-card-padding);
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .my-card-test-test-color {
    color: var(--title-primary);
  }
`;
