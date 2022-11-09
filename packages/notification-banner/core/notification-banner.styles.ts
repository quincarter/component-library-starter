import { css, CSSResult } from 'lit';

export const NotificationBannerComponentStyles: CSSResult = css`
  .banner {
    background-color: lightyellow;
    height: 4rem;
    padding: 1rem;
    border-left: 1rem solid orange;
    position: relative;
  }

  .title {
    font-weight: 600;
  }

  .close::after {
    content: '\\00D7';
    cursor: pointer;
    font-size: 2em;
    font-style: normal;
    position: absolute;
    top: 0;
    right: 1rem;
  }
`;
