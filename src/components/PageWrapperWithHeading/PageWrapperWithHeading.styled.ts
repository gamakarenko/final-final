import styled from '@emotion/styled';

export const StyledPageWrapperWithHeading = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 12px;
  row-gap: 15px;

  .page-wrapper-with-heading {
    &__btn-back, &__heading {
      align-self: center;
    }

    &__btn-back {
      padding-left: 3px;
    }

    &__arrow {
      fill: var(--primary-color);
    }

    &__content-box {
      grid-row: 2;
      grid-column: 1/-1;
    }
  }
`;
