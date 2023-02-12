import styled from '@emotion/styled';

import { StyledPageText } from '../PageText/PageText.styles';
import { PageParagraphProps } from './PageParagraph';

export const StyledPageParagraph = styled(StyledPageText)<
  Pick<PageParagraphProps, 'underlined'>
>`
  margin-bottom: 20px;
  border-bottom: ${(props) =>
    props.underlined ? '1px solid var(--line-color)' : 'none'};
  padding-bottom: ${(props) => (props.underlined ? '20px' : '0')};
`;
