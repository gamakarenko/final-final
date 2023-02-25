import { AllHTMLAttributes, FC } from 'react';

import { joinClasses } from 'utils/joinClasses';

import { StyledPageText } from './PageText.styles';

const PageText: FC<AllHTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
}) => {
  return (
    <StyledPageText className={joinClasses('page-text', className)}>
      {children}
    </StyledPageText>
  );
};

export default PageText;
