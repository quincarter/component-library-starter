import { css } from 'lit';

export const BlobsComponentStyles = css`
  .blob {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 50%;
    width: 50vmax;
    z-index: -1;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }

  @keyframes move {
    0% {
      transform: scale(1) translate(10px, -30px);
    }
    38% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
    }
    40% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
    }
    78% {
      transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
    }
    80% {
      transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
    }
    100% {
      transform: scale(1) translate(10px, -30px);
    }
  }

  .heart-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .heart {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 3000px;
    min-width: 1920px;
    pointer-events: none;
    transform: translate3d(-50%, 0, 0);
  }
`;
