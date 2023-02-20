import styled from '@emotion/styled/macro';

export const StyledTransferCreationForm = styled.div`
  .transfer-creation-form {
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

    &__error-text {
      min-height: 17px;
      color: var(--error-color);
      font-size: 14px;
    }
  }
`;
