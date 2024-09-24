import { css, CSSResultOrNative } from 'lit';

export const BottomMobileNavComponentStyles: CSSResultOrNative = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .bottom-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.8rem 0;
    background-color: #252a32;
    z-index: 99;
    will-change: transform;
    transform: translateZ(0);
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 3px rgba(0, 0, 0, 0.24);
  }
  .bottom-nav-item {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    text-align: center;
    font-size: 0.8rem;
    color: #f1f5f8;
  }
  .bottom-nav-link {
    display: flex;
    flex-direction: column;
  }
  .bottom-nav .active {
    color: #d32f2f;
  }
`;
