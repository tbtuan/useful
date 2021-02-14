import styled from "@emotion/styled";
import { Link } from "gatsby";

export const StyledDiv = styled("div")`
  position: relative;
  height: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.textLink} !important;
  text-decoration: none;
  display: block;
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

export const StyledContainer = styled("div")`
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  margin-left: 2rem;
  overflow-y: auto;
  max-height: 13rem;
  margin-right: 1rem;
  ::-webkit-scrollbar-track {
    background-color: #e6e6e6;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #c0c0c0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c0c0c0;
  }
`;

export const HeadingWrapper = styled("div")`
  position: relative;
  margin: 0;
  height: 3.75rem;
`;

export const StyledHeading = styled("h2")``;
