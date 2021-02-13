import { Link } from "gatsby";
import styled from "@emotion/styled";

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.textLink} !important;
  text-decoration: none;
`;

export const Ul = styled("ul")`
  padding-left: 0;
  margin: 0 0 1.5rem 0;
`;

export const Li = styled("li")`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled("div")``;

export const Main = styled("main")`
  color: ${(props) => props.theme.colors.text};
`;
