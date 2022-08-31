import { css } from 'lit';

export const FabComponentStyles = css`
  * {
    font-family: Arial, Helvetica, sans-serif, serif;
  }

  .fab-container {
    display: flex;
  }

  .fab-button:hover {
    cursor: pointer;
  }

  .fab-button {
    background: blueviolet;
    border: none;
    border-radius: 70%;
    box-shadow: var(--box-shadow-1);
    color: white;
    font-size: 1.5em;
    font-weight: 100;
    height: 4rem;
    padding: 1rem;
    width: 4rem;
  }
`;
