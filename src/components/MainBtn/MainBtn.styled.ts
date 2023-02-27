import styled from '@emotion/styled';

export const StyledMainBtn = styled.button`
  width: 100%;
  padding: 10px 15px;
  background-color: var(--primary-color);
  border-radius: 10px;
  display: flex;
  align-items: center;
  column-gap: 15px;

  .main-btn {
    &__text {
      color: white;
      font-weight: 510;
      font-size: 15px;
      line-height: 1.2;
      max-width: 205px;
      text-align: left;
    }

    &__icon-box {
      width: 60px;
      height: 60px;
      display: grid;
      place-content: center;
      background-color: #fff;
      border-radius: 8px;
    }
  }

  &:active {
    background-color: var(--primary-color-light);
  }

  &:disabled {
    background-color: var(--disabled-color);
    pointer-events: none;
  }
`;
