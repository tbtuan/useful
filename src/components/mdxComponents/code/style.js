import styled from "@emotion/styled";

export const StyledPre = styled("pre")`
  font-family: monospace !important;
  margin: 0px;
  padding: 1rem;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.preFormattedText} !important;

  ::-webkit-scrollbar-track {
    background-color: #424555;
  }

  ::-webkit-scrollbar {
    height: 5px;
    background-color: #6d738d;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #6d738d;
  }

  .token-line {
  }

  .token-plain,
  .token-comment {
    width: auto;
  }
`;
