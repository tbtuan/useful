import styled from "@emotion/styled";

const Divider = styled("hr")`
  background-color: ${({ theme }) => theme.colors.text};
  margin-top: 2rem;
  margin-bottom 2rem;
`;

export default Divider;