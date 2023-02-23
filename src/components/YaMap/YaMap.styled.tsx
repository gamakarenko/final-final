import styled from '@emotion/styled';

interface StyledYaMapProps {
  isCardVisible: boolean;
}

export const StyledYaMap = styled.div<StyledYaMapProps>`
  .ya-map {
    &__address-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
    }

    &__card-btn {
      font-size: 10px;
      width: auto;
    }

    &__map {
      width: 100%;
      max-width: 100%;
      height: 400px;
      max-height: 70vh;
      display: ${({ isCardVisible }) => (isCardVisible ? 'block' : 'none')};
      border: 1px solid #adadad;
      border-bottom: none;
      border-radius: 5px 5px 0 0;
      overflow: hidden;
    }

    &__text-area .app-input__input_text-area {
      border-radius: ${({ isCardVisible }) =>
        isCardVisible ? '0 0 5px 5px' : '5px'};
      border-top: ${({ isCardVisible }) =>
        isCardVisible ? 'none' : '1px solid #adadad'};
    }
  }
`;
