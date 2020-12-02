import styled from "@emotion/styled";
import React from "react";

const Icon = styled(({ tag, children, ...props }) =>
  React.createElement(tag, props, children)
)`
  color: ${({ theme }) => theme.colors.text};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  margin-right: ${(props) => props.gap};
`;

export default Icon;
