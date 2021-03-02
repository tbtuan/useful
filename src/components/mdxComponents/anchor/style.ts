import styled from "@emotion/styled";

export const StyledAnchor = styled("a")`
  text-decoration: none;
  color: ${(props) => props.theme.colors.textLink};
  :hover {
    opacity: 85%;
    text-decoration: underline;
    cursor: pointer;
  }
`;
