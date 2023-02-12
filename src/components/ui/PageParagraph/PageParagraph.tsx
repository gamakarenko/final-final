import { AllHTMLAttributes, FC } from 'react';

import { StyledPageParagraph } from './PageParagraph.styles';

export interface PageParagraphProps extends AllHTMLAttributes<HTMLParagraphElement> {
  underlined?: boolean;
}

const PageParagraph: FC<PageParagraphProps> = ({ underlined, children }) => {
  return <StyledPageParagraph underlined={underlined}>{children}</StyledPageParagraph>;
};

export default PageParagraph;
