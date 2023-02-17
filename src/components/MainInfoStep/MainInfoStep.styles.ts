import styled from '@emotion/styled';

export const StyledMainInfoStep = styled.fieldset`
  border: none;

  .main-info-fieldset {
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
      width: auto;
    }

    &__address-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
    }
  }
`;
