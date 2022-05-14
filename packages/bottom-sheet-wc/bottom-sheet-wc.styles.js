import { css } from 'lit';

export const BottomSheetComponentStyles = css`
  * {
    font-family: Arial, Helvetica, sans-serif, serif;
  }
  .bottom-sheet-container {
    bottom: 0;
    display: grid;
    place-items: center;
    position: fixed;
    transform: translateY(150%);
    transition: all 0.25s ease-out;
    width: 100%;
  }

  .bottom-sheet-container.active {
    transform: translateY(0%);
    transition: all 0.25s ease-in;
  }

  .bottom-sheet {
    background: #fff;
    border: 1px solid lightgrey;
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    -webkit-box-shadow: 10px -4px 44px -20px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px -4px 44px -20px rgba(0, 0, 0, 0.75);
    box-shadow: 10px -4px 44px -20px rgba(0, 0, 0, 0.75);
    padding: 1rem;
    width: 100%;
    overflow: hidden;
  }

  @media screen and (max-width: 599px) {
    .bottom-sheet-container {
      left: 0;
      display: flex;
      position: fixed;
      transform: translateY(150%);
      transition: all 0.25s ease-out 0s;
      width: 100%;
      padding: 0;
      margin: 0;
    }

    div.sheet-footer {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 600px) {
    .bottom-sheet {
      width: calc(100% / 2);
    }

    div.sheet-footer {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }

    div.sheet-footer > button {
      text-align: center;
    }
  }

  @media screen and (min-width: 1438px) {
    .bottom-sheet {
      width: calc(100% / 3);
    }
  }

  ul {
    display: flex;
    overflow: auto;
    flex-direction: row;
    list-style-type: none; /* Remove bullets */
    padding: 0; /* Remove padding */
    margin: 0; /* Remove margins */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  ul::-webkit-scrollbar {
    display: none;
  }

  li {
    margin: 1rem 0.5rem;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  .sheet-footer {
    bottom: 0;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    width: 100%;
  }

  .sheet-footer > button {
    border: none;
    background: none;
    background-position: center;
    transition: background 0.8s;
    border-radius: 50%;
    padding: 1rem;
  }

  .sheet-footer > button:active {
    transition: background 0s;
    background-size: 100%;
    border-radius: 50%;
    background: lightgrey;
  }

  .info-text {
    background-color: rebeccapurple;
    display: grid;
    justify-content: center;
    opacity: 0.55;
    color: #fff;
    padding: 1rem;
    border-radius: 10px;
  }
`;
