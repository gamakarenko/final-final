import styled from '@emotion/styled';

interface StyledFaqTabProps {
  isOpened: boolean;
}

export const StyledFaqTab = styled.button<StyledFaqTabProps>`
  display: block;
  width: 100%;
  text-align: left;
  background-color: var(--primary-color-light);
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.2;
  color: #fff;

  .faq-tab {
    &__question {
      border-radius: 10px;
      padding: 15px;
      background-color: ${({ isOpened }) =>
        isOpened ? 'var(--primary-color-darker)' : 'var(--primary-color)'};
    }

    &__answer {
      padding: 15px;
    }
  }
`;
