import { AllHTMLAttributes, FC } from 'react';

import { StyledPageText } from './PageText.styles';

const PageText: FC<AllHTMLAttributes<HTMLParagraphElement>> = ({ children, className = '' }) => {
  return <StyledPageText className={`page-text${className ? ' ' + className : ''}`}>{children}</StyledPageText>;
};

export default PageText;
