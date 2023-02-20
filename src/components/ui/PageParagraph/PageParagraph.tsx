import { AllHTMLAttributes, FC } from 'react';

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
      className={className ? ' ' + className : ''}
      underlined={underlined}
    >
      {children}
    </StyledPageParagraph>
  );
};

export default PageParagraph;
