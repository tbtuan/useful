import styled from "@emotion/styled";

export const StyledDiv = styled("div")`
  position: relative;
  height: 12rem;
  margin-bottom: 1rem;
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
  overflow-y: auto;
  max-height: 13rem;
  columns: 2;
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
  height: 3.75rem;
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
`;

export const TagList = styled("ol")`
  margin: 0;
  padding: 0rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;