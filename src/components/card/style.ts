import styled from "@emotion/styled";

export const StyledDiv = styled("div")`
  position: relative;
  min-height: 12rem;
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
`;

export const StyledHeading = styled("h2")`
  margin-top: 0;
`;

export const TagContainer = styled("div")`
  bottom: 0;
  border-top: 1px solid #d6d6d6;
  width: 100%;
  padding: 0.9rem 0 1.2rem 0;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  flex-direction: ${({ show }: Props) => (show ? "column" : "row")};
`;

export const StyledTag = styled("small")`
  margin-left: 2rem;
`;

export const Tag = styled("span")`
  display: inline-block;
  user-select: none;
  font-size: 0.7rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.tag};
  border-radius: 1rem;
`;

interface Props {
  show?: boolean;
  showMore?: boolean;
}

export const TagList = styled("ol")`
  /* display: flex;
  flex-direction: row;
  gap: 0.5rem; */
  margin: 0;
  padding: 0rem;
  overflow-x: hidden;
  /* width: ${({ showMore }: Props) => (showMore ? "80%" : "100%")}; */
  text-overflow: ${({ show }: Props) => (show ? "inherit" : "ellipsis")};
  white-space: ${({ show }: Props) => (show ? "wrap" : "nowrap")};
`;
