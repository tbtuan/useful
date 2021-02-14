import { Link } from "gatsby";
import styled from "@emotion/styled";

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.textLink} !important;
  text-decoration: none;
  display: block;
`;

export const Container = styled("div")``;

export const Main = styled("main")`
  color: ${(props) => props.theme.colors.text};
`;
