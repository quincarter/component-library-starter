import { css, CSSResult } from 'lit';

export const MyFormElementButtonStyles: CSSResult = css`
  :host {
    --test-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    --default-card-padding: 2rem;
  }

  .button {
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    padding: 1rem;
    width: fit-content;
  }

  .my-form-element-test-color {
    color: #fff;
  }
`;
