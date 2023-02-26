import styled from '@emotion/styled';

export const StyledAppInput = styled.label`
  display: grid;
  gap: 5px;

  .app-input {
    &__input {
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.4375em;
      letter-spacing: 0.00938em;
      width: 100%;
      background: #e9e9e9;
      border: 1px solid #adadad;
      border-radius: 5px;
      outline: none;
      padding: 10px 1em;

      &:focus-visible {
        border: 1px solid var(--primary-color);
      }

      &:before {
        border-bottom: none;
      }

      &_text-area {
        resize: none;
      }
    }
  }
`;
