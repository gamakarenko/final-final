import { AllHTMLAttributes, FC } from 'react';

import { joinClasses } from 'utils/joinClasses';

import { StyledPageHeading } from './PageHeading.styled';

const PageHeading: FC<AllHTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
}) => {
  return (
    <StyledPageHeading className={joinClasses('page-heading', className)}>
      {children}
    </StyledPageHeading>
  );
};

export default PageHeading;
