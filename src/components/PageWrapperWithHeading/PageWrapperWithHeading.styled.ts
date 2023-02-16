import styled from '@emotion/styled';

export const StyledPageWrapperWithHeading = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 15px;
  row-gap: 10px;

  .page-wrapper-with-heading {
    &__btn-back {
      align-self: center;
      display: block;
      margin: 0;
      padding: 0;
      border: none;
      transform: translateY(3px);
      cursor: pointer;
    }

    &__arrow {
      fill: var(--primary-color);
    }

    &__heading {
      align-self: center;
    }

    &__content-box {
      grid-row: 2;
      grid-column: 1/-1;
    }
  }
`;
