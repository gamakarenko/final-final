import styled from '@emotion/styled';

export const StyledSummaryStep = styled.div`
  .summary-step {
    &__info-box {
      display: grid;
      gap: 15px;
      margin-bottom: 20px;
    }

    &__info-box_bottom-lined {
      padding-bottom: 20px;
      border-bottom: 1px solid var(--line-color);
    }
  }
`;
