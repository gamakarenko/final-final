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
      /* font-size: 10px; */
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

    &__address-select-box {
      position: relative;
      z-index: 0;
      border-radius: 5px;
      border: 1px solid var(--line-color);
      background-color: #e9e9e9;

      border-radius: ${({ isCardVisible }) =>
        isCardVisible ? '0 0 5px 5px' : '5px'};
      border-top: ${({ isCardVisible }) =>
        isCardVisible ? 'none' : '1px solid var(--line-color)'};
    }

    &__text-area {
      resize: none;
      display: block;
      border: none;
      font-size: 15px;
      line-height: 1.2;
      padding: 15px 56px 15px 15px;
      width: 100%;
      background-color: transparent;
      outline: none;
      pointer-events: none;
    }

    &__btn-select {
      position: absolute;
      right: 0;
      top: 5px;
      bottom: 5px;
      z-index: 1;
    }
  }
`;
