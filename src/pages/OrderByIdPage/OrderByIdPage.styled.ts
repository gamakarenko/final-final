import styled from "@emotion/styled";

export const StyledOrderByIdPage = styled.div`
.order-by-id-page {
  &__btn:not(:last-child) {
    margin-bottom: 10px;
  }

  &__deleting-text {
    font-size: 16px;
    color: var(--error-color);
  }
}
`