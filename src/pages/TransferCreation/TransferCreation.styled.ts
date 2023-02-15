import styled from '@emotion/styled/macro';

export const StyledTransferCreation = styled.div`
  .transfer-creation {
    &__heading {
      margin-bottom: 10px;
    }

    &__paragraph {
      margin-bottom: 20px;
    }

    &__bottom-paragraph {
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #adadad;
    }

    &__steps-btns-box {
      padding: 20px 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    &__btn-left {
      grid-column: 1;
    }

    &__btn-right {
      grid-column: -2;
    }

    &__spinner {
      grid-column: 1/-1;
      align-self: center;
    }
  }

  .transfer-fieldset {
    border: none;
    display: grid;
    row-gap: 15px;

    &__two-columns-box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    &__rows-box {
      display: grid;
      gap: 5px;
    }

    &__label {
      margin-bottom: 5px;
    }

    &__radio-group {
      display: flex;
      justify-content: space-around;
    }

    &__card-btn {
      font-size: 10px;
    }

    &__address-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
    }
  }
`;
