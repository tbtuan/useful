import styled from "@emotion/styled";

export const Anchor = styled("a")`
  text-decoration: none;
  color: ${(props) => props.theme.colors.link};

  :hover {
    opacity: 85%;
    text-decoration: underline;
  }
`;