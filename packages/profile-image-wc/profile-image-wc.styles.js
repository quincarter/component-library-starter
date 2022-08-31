import { css } from 'lit';

export const ProfileImageComponentStyles = css`
  .profile-image-container {
    width: fit-content;
  }

  .profile-image-container.profile-border {
    border: 1px solid var(--component-background--grey);
    border-radius: 50% 50% 50% 50% / 37% 37% 37% 37%;
    padding: 1rem;
  }

  .profile-image {
    background-color: var(--component-background--grey);
  }

  .ellipse {
    clip-path: var(--clip-path--ellipse);
  }

  .pill {
    clip-path: var(--clip-path--pill);
    /* border-radius: 50% 50% 50% 50% / 37% 37% 37% 37%; */
  }
`;
