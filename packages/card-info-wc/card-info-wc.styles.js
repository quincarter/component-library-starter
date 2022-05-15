import { css } from 'lit';

export const CardInfoWebComponentStyles = css`
  * {
    font-family: Optimist, serif;
  }
  html,
  body {
    margin: 0;
    height: 100%;
    width: 100%;
  }

  .card-header {
    display: flex;
    flex-direction: row;
  }

  .card {
    align-items: flex-start;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    height: 100px;
    padding: 16px;
    right: 1168px;
    top: calc(50% - 127px / 2);
    min-width: 200px;
  }

  .status-bar-color {
    align-self: stretch;
    background-color: #307dad;
    flex: none;
    flex-grow: 0;
    height: 5px;
    left: 16px;
    margin: 4px 0;
    order: 0;
    position: static;
    top: 16px;
    width: 168px;
  }

  .right-scroll {
    transform: translateX(calc(100% - 100px));
  }
`;
