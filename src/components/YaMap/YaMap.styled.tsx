import styled from "@emotion/styled";
import { YaMapProps } from "./YaMap";

export const StyledYaMap = styled.div<Pick<YaMapProps, 'isVisible'>>`
  width: 100%;
  max-width: 375px;
  height: 400px;
  display: ${({isVisible}) => isVisible ? 'block' : "none"};
`