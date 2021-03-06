import styled from "@emotion/styled";
import { Link } from "gatsby";

export const StyledDiv = styled("div")`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  grid-template-rows: 1fr 0.1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Main Side"
    "Tags Tags";
  margin-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.textLink} !important;
  text-decoration: none;
  cursor: pointer;

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

export const StyledContainer = styled("div")`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
  overflow-y: auto;
  max-height: 13rem;
  grid-area: Side;
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.scrollbarTrack};
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${({ theme }) => theme.colors.scrollbar};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbar};
  }
`;

export const HeadingWrapper = styled("div")`
  position: relative;
  margin: 0;
  grid-area: Main;
`;

export const StyledHeading = styled("h2")``;

export const TagContainer = styled("div")`
  bottom: 0;
  border-top: 1px solid #d6d6d6;
  width: 100%;
  padding: 0.9rem 0 1.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-top: 1.5rem;
  grid-area: Tags;
`;

export const StyledTag = styled("small")`
  margin-left: 2rem;
`;

export const Tag = styled("span")`
  display: inline-block;
  font-size: 0.7rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  background-color: ${({ theme }) => theme.colors.tag};
  border-radius: 1rem;
  user-select: none;
`;

export const TagList = styled("ol")`
  margin: 0;
  padding: 0rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
