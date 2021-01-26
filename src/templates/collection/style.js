import { Link } from "gatsby";
import styled from "@emotion/styled";

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.textLink} !important;
`;

export const Ul = styled("ul")`
  padding-left: 0;
  margin: 0 0 1.5rem 0;
`;

export const Li = styled("li")`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0.4rem;
`;

export const Container = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 20rem));
  grid-gap: 1rem;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(0, 20rem));
  }

  @media only screen and (max-width: 576px) {
    grid-template-columns: repeat(1, minmax(0, 20rem));
  }
`;

export const Main = styled("main")`
  color: ${(props) => props.theme.colors.text};
`;
