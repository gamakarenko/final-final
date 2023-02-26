import styled from '@emotion/styled';

export const StyledAppRadioBtn = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  line-height: 1;
  -webkit-tap-highlight-color: transparent;
  
  .app-radio-btn {
    &__input {
      appearance: none;
      width: 1.4em;
      height: 1.4em;
      background-color: transparent;
      border-radius: 50%;
      border: 1px solid #000;
      cursor: inherit;
    }

    &__input:checked {
      border: 1px solid var(--primary-color);
      background-color: var(--primary-color);
    }
  }
`;
