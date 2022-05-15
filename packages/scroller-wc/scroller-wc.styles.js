import { css } from 'lit';

export const ScrollerWebComponentStyles = css`
  * {
    font-family: Optimist, serif;
  }
  html,
  body {
    margin: 0;
    height: 100%;
    width: 100%;
  }

  .arrow-container {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    margin: 1rem;
  }

  .left-arrow {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px;
    cursor: pointer;
  }
  .left-arrow::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    left: 6px;
    top: 4px;
  }

  .right-arrow {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px;
    cursor: pointer;
  }
  .right-arrow::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    transform: rotate(-45deg);
    right: 6px;
    top: 4px;
  }

  .header {
    font-size: 20px;
    line-height: 30px;
  }

  .card-header {
    display: flex;
    flex-direction: row;
  }

  .container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin: 1rem 0 2rem;
    padding: 1rem;
    overflow: auto;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .container::-webkit-scrollbar {
    display: none;
  }

  .task-card {
    /* Auto layout */
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

  .task-status-bar-color {
    /* Rectangle 5 */
    align-self: stretch;
    background-color: #255f82;
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
