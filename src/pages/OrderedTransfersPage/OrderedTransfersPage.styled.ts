import styled from '@emotion/styled';
import PageWrapperWithHeading from 'components/PageWrapperWithHeading/PageWrapperWithHeading';

export const StyledOrderedTransfersPage = styled(PageWrapperWithHeading)`
  .ordered-transfers-page {
    &__heading {
      margin-bottom: 15px;
    }

    &__order-btn {
      margin-bottom: 10px;
    }

    &__order-btn:last-of-type {
      margin-top: 20px;
      margin-bottom: 0;
    }
  }
`;
