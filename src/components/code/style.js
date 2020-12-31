import styled from "@emotion/styled";

export const Code = styled("pre")`
  font-size: 13px;
  margin: 0px;
  padding: 1rem;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.preFormattedText} !important;

  .token-line {
  }

  .token-plain,
  .token-comment {
    width: auto;
  }
`;
