import styled from "@emotion/styled";

export const StyledShortOrderCard = styled.div`
  display: grid;
  gap: 5px;

  .short-order-card {
    &__heading{
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.2;
    }

    &__item {
      font-weight: 400;
      font-size: 15px;
      line-height: 1.2;
    }

    &__item-data {
      font-weight: 500;
    }
  }
`