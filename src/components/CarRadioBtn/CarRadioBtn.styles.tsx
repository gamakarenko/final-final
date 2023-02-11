import styled from '@emotion/styled';

export const StyledCarRadioBtn = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 0;
  padding: 6px;


  .car-radio-btn {
    &__input {
      appearance: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      cursor: pointer;
      border-radius: 10px;
      border: 1px #000 solid;
    }

    &__label {
      pointer-events: none;
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: auto 1fr;
      column-gap: 13px;
    }

    &__input:checked {
      background-color: var(--primary-color);
      border: 1px var(--primary-color) solid;
    }

    //? баг? не подставляет в составном селекторе вместо амперсанда
    /* &__input:checked + &__label {
      color: #fff;
    } */
    &__input:checked + .car-radio-btn__label {
      color: #fff;
    }

    &__img {
      width: 35px;
      height: 35px;
      grid-row: 1/-1;
    }

    &__heading {
      font-size: 14px;
      font-weight: 500;
    }

    &__max-people {
      font-size: 12px;
      font-weight: 400;
    }
  }
`;
