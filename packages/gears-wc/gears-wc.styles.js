import { css } from 'lit';

export const GearsComponentStyles = css`
  .gears {
    width: fit-content;
  }
  .gears-container {
    display: flex;
    flex-direction: column;
    font-size: 24px;
    padding: 9%;
    place-content: center;
    position: relative;
    width: 150px;
  }
  .gear-rotate {
    width: 2em;
    height: 2em;
    top: 50%;
    left: 50%;
    margin-top: -1em;
    margin-left: -1em;
    background: #ddd565;
    position: absolute;
    border-radius: 1em;
    -webkit-animation: 1s gear-rotate linear infinite;
    -moz-animation: 1s gear-rotate linear infinite;
    animation: 1s gear-rotate linear infinite;
  }
  .gear-rotate-left {
    margin-top: -2.2em;
    top: 50%;
    width: 2em;
    height: 2em;
    background: #ddd565;
    position: absolute;
    border-radius: 1em;
    -webkit-animation: 1s gear-rotate-left linear infinite;
    -moz-animation: 1s gear-rotate-left linear infinite;
    animation: 1s gear-rotate-left linear infinite;
  }

  .gear-rotate::before,
  .gear-rotate-left::before {
    width: 2.8em;
    height: 2.8em;
    background: -webkit-linear-gradient(
        0deg,
        transparent 39%,
        #ddd565 39%,
        #ddd565 61%,
        transparent 61%
      ),
      -webkit-linear-gradient(60deg, transparent 42%, #ddd565 42%, #ddd565 58%, transparent
            58%),
      -webkit-linear-gradient(120deg, transparent 42%, #ddd565 42%, #ddd565 58%, transparent
            58%);
    background: -moz-linear-gradient(
        0deg,
        transparent 39%,
        #ddd565 39%,
        #ddd565 61%,
        transparent 61%
      ),
      -moz-linear-gradient(60deg, transparent 42%, #ddd565 42%, #ddd565 58%, transparent
            58%),
      -moz-linear-gradient(120deg, transparent 42%, #ddd565 42%, #ddd565 58%, transparent
            58%);
    background: -o-linear-gradient(
        0deg,
        transparent 39%,
        #ddd565 39%,
        #ddd565 61%,
        transparent 61%
      ),
      -o-linear-gradient(60deg, transparent 42%, #ddd565 42%, #ddd565 58%, transparent
            58%),
      -o-linear-gradient(120deg, transparent 42%, #ddd565 42%, #ddd565 58%, transparent
            58%);
    background: -ms-linear-gradient(
        0deg,
        transparent 39%,
        #ddd565 39%,
        #ddd565 61%,
        transparent 61%
      ),
      -ms-linear-gradient(60deg, transparent 42%, #ddd565 42%, #ddd565 58%, transparent
            58%),
      -ms-linear-gradient(120deg, transparent 42%, #ddd565 42%, #ddd565 58%, transparent
            58%);
    background: linear-gradient(
        0deg,
        transparent 39%,
        #ddd565 39%,
        #ddd565 61%,
        transparent 61%
      ),
      linear-gradient(
        60deg,
        transparent 42%,
        #ddd565 42%,
        #ddd565 58%,
        transparent 58%
      ),
      linear-gradient(
        120deg,
        transparent 42%,
        #ddd565 42%,
        #ddd565 58%,
        transparent 58%
      );
    position: absolute;
    content: '';
    top: -0.4em;
    left: -0.4em;
    border-radius: 1.4em;
  }
  .gear-rotate::after,
  .gear-rotate-left::after {
    width: 1em;
    height: 1em;
    background: whitesmoke;
    position: absolute;
    content: '';
    top: 0.5em;
    left: 0.5em;
    border-radius: 0.5em;
  }

  /*
 * Keyframe Animations
 */

  @-webkit-keyframes gear-rotate {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-180deg);
    }
  }

  @-moz-keyframes gear-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-180deg);
    }
  }

  @keyframes gear-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-180deg);
    }
  }

  @-webkit-keyframes gear-rotate-left {
    0% {
      -webkit-transform: rotate(30deg);
    }
    100% {
      -webkit-transform: rotate(210deg);
    }
  }

  @-moz-keyframes gear-rotate-left {
    0% {
      -webkit-transform: rotate(30deg);
    }
    100% {
      -webkit-transform: rotate(210deg);
    }
  }

  @keyframes gear-rotate-left {
    0% {
      -webkit-transform: rotate(30deg);
    }
    100% {
      -webkit-transform: rotate(210deg);
    }
  }
`;
