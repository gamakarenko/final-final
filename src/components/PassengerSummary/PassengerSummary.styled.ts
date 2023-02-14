import styled from "@emotion/styled";

export const StyledPassengerSummary = styled.div`
.passenger-summary {
  &__heading {
    font-weight: 700;
    font-size: 17px;
    line-height: 1.7;
    margin-bottom: 10px;
  }

  &__info:not(:last-of-type) {
    margin-bottom: 15px;
  }
}
`