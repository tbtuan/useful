import styled from "@emotion/styled";

const StyledDivider = styled("hr")`
  background-color: ${({ theme }) => theme.colors.text};
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export default StyledDivider;
