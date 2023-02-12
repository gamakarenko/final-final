import { AllHTMLAttributes, FC } from 'react';

import { StyledPageHeading } from './PageHeading.styled';

const PageHeading: FC<AllHTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
}) => {
  return (
    <StyledPageHeading
      className={`page-heading${className ? ' ' + className : ''}`}
    >
      {children}
    </StyledPageHeading>
  );
};

export default PageHeading;
