import styled from "@emotion/styled";

const Preformatted = styled("pre")`
  padding: 0.5rem;
  z-index: 1;
  background: ${({ theme }) => theme.colors.preFormattedText};
  border-radius: 1em;

  border-radius: 0.4rem;
`;

export default Preformatted;
