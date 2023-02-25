import { AllHTMLAttributes, FC } from 'react';

import { joinClasses } from 'utils/joinClasses';

import { StyledPageParagraph } from './PageParagraph.styles';

export interface PageParagraphProps
  extends AllHTMLAttributes<HTMLParagraphElement> {
  underlined?: boolean;
  className?: string;
}

const PageParagraph: FC<PageParagraphProps> = ({
  underlined,
  children,
  className,
}) => {
  return (
    <StyledPageParagraph
      className={joinClasses('page-paragraph', className)}
      underlined={underlined}
    >
      {children}
    </StyledPageParagraph>
  );
};

export default PageParagraph;
