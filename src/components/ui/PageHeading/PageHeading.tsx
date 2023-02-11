import { AllHTMLAttributes, FC } from 'react';

import { StyledPageHeading } from './PageHeading.styled';

const PageHeading: FC<AllHTMLAttributes<HTMLHeadingElement>> = ({ children }) => {
  return <StyledPageHeading className='page-heading'>{children}</StyledPageHeading>;
};

export default PageHeading;
