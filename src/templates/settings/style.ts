import styled from "@emotion/styled";

export const TitleWrapper = styled("div")`
  color: ${(props) => props.theme.colors.text};
  width: calc(100% - 14rem);
`;

export const Main = styled("main")`
  color: ${(props) => props.theme.colors.text};
  max-width: calc(100% - 14rem);

  @media only screen and (max-width: 1023px) {
    max-width: 100%;
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

export const HeadingWrapper = styled("div")`
  position: relative;
  margin: 0;
  height: 3.75rem;
`;

export const StyledHeading = styled("h2")`
  display: inline-block;
  margin-top: 3rem;
`;

export const StyledDiv = styled("div")`
  position: relative;
`;

export const StyledContainer = styled("div")`
  margin-top: 2rem;
  overflow-y: auto;
  max-height: 15rem;
  padding-right: 1rem;
  column-count: 4;
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

export const StyledHeading2 = styled("h2")`
  display: inline-block;
  margin-top: 3rem;
`;

export const StyledLabel = styled("label")`
  user-select: none;
`;

export const StyledInput = styled("input")`
  margin-right: 1rem;
`;
