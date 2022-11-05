import { css, CSSResult } from 'lit';

export const MyHeaderComponentStyles: CSSResult = css`
  :host {
    --test-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    --default-card-padding: 2rem;
    --background-primary: #fff;
    --font-color-primary: #000;
    display: flex;
    flex-direction: column;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --title-primary: #ca9ae9;
      --background-primary: #494545;
      --font-color-primary: #fff;
    }
  }

  * {
    background-color: var(--background-primary);
    padding-inline: 1rem;
    color: var(--font-color-primary);
    box-shadow: var(--test-box-shadow);
  }

  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
