import styled from '@emotion/styled';

export const StyledAppCheckbox = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  line-height: 1;
  -webkit-tap-highlight-color: transparent;

  .app-checkbox {
    &__input {
      appearance: none;
      width: 1.4em;
      height: 1.4em;
      background-color: transparent;
      border-radius: 5px;
      border: 1px solid #000;
      cursor: inherit;
    }

    &__input:checked {
      border: 1px solid var(--primary-color);
      background-color: var(--primary-color);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='9' fill='none'%3E%3Cpath fill='%23fff' d='M4.133 6.494 9.64.987a.885.885 0 0 1 .653-.257c.265 0 .482.086.654.257a.885.885 0 0 1 .256.653.885.885 0 0 1-.256.654l-6.16 6.16a.895.895 0 0 1-.654.28.895.895 0 0 1-.653-.28L1.053 6.027a.885.885 0 0 1-.256-.653c0-.265.085-.482.256-.654a.885.885 0 0 1 .654-.256c.264 0 .482.085.653.256l1.773 1.774Z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;
