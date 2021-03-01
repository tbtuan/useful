import styled from "@emotion/styled";

export const Header = styled("header")`
  width: 100%;
  height: 5rem;
  position: fixed;
  display: flex;
  padding-top: 3rem;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.background};

  @media only screen and (max-width: 1023px) {
    height: 4rem;
    padding-top: 0rem;
  }
`;
