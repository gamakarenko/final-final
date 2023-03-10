import styled from '@emotion/styled';

export const StyledPassengerFieldset = styled.div`
  padding-bottom: 20px;
  display: grid;

  &:not(:first-of-type) {
    border-top: 1px solid var(--line-color);
    padding-top: 20px;
  }

  .passenger-field {
    &__del-btn {
      justify-self: end;
      margin-top: 10px;
    }

    &__input-box:not(:last-of-type), &__two-column-box {
      margin-bottom: 15px;
    }

    &__heading {
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;
    }
  }
`;
