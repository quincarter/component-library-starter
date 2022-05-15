import { css } from 'lit';

export const HeaderComponentStyles = css`
  ::slotted(*) {
    padding: 0 1rem;
  }

  .header-container {
    align-items: center;
    box-shadow: var(--box-shadow-1);
    display: flex;
    flex-direction: row;
    gap: 1rem;
    height: var(--header-height);
    justify-content: space-between;
    width: 100%;
  }
`;
