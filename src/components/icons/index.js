import styled from "@emotion/styled";
import { createElement } from "react";

const Icon = styled(({ tag, children, ...props }) =>
  createElement(tag, props, children)
)`
  color: ${({ theme }) => theme.colors.text};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  margin-right: ${(props) => props.gap};
`;

export default Icon;
