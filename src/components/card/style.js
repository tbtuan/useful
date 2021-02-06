import styled from "@emotion/styled";

export const StyledDiv = styled("div")`
  height: 22.5rem;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.sidebar};
  border-radius: 0.4rem;
`;

export const StyledContainer = styled("div")`
  margin-top: 2rem;
  margin-left: 2.5rem;
`;

export const HeadingWrapper = styled("div")`
  border-bottom: 1px solid #d6d6d6;
  position: relative;
  margin: 0;
  height: 3.75rem;
`;

export const StyledHeading = styled("h4")`
  display: inline-block;
  margin-top: 3rem;
  margin-left: 2rem;
  background-color: ${({ theme }) => theme.colors.sidebar};
  padding: 0 0.5rem;
`;
