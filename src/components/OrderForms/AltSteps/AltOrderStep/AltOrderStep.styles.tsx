import { FC } from 'react';

import styled from '@emotion/styled/macro';

export const StyledTripDirection = styled.fieldset`
  border: none;
  margin: 0 0 10px;

  .trip-direction {
    &__radio-group {
      display: flex;
      justify-content: space-around;
    }
  }
`;
