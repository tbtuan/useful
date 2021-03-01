import styled from "@emotion/styled";
import Cog from "icons/Cog.svg";
import { Link } from "gatsby";

export const StyledDiv = styled("div")`
  column-count: 2;
`;

export const TitleWrapper = styled("div")`
  color: ${(props) => props.theme.colors.text};
  width: calc(100% - 14rem);
  @media only screen and (max-width: 1023px) {
    width: auto;
  }
`;

export const CogIcon = styled(Cog)`
  fill: #76828c;
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
`;

export const Main = styled("main")`
  color: ${(props) => props.theme.colors.text};
  max-width: calc(100% - 14rem);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 30rem));
  grid-gap: 1rem;

  @media only screen and (max-width: 1023px) {
    max-width: 100%;
  }

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 30rem));
  grid-gap: 1rem;

  @media only screen and (max-width: 576px) {
    display: block;
  }
`;

export const StyledIconLink = styled(Link)`
  margin-left: 2rem;
  margin-top: 1rem;
  svg {
    fill: ${(props) => props.theme.colors.text};

    :hover {
      fill: ${(props) => props.theme.colors.textLink};
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.textLink} !important;
  text-decoration: none;
  display: block;

  :hover {
    text-decoration: underline;
  }
`;

export const StyledA = styled("a")`
  color: ${(props) => props.theme.colors.textLink} !important;
  text-decoration: none;
  display: block;

  :hover {
    text-decoration: underline;
  }
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
