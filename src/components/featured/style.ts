import styled from "@emotion/styled";

export const StyledDiv = styled("div")`
  position: relative;
`;

export const StyledContainer = styled("div")`
  overflow-y: auto;
  max-height: 9rem;
  padding-right: 1rem;
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
  margin: 0;
`;

export const StyledHeading = styled("h2")`
  display: inline-block;
`;
