import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
`;

export const Content = styled("main")`
  min-width: 0;
  width: 100%;
  padding: 3rem;
  padding-left: 4rem;

  @media only screen and (max-width: 1023px) {
    padding: 3rem;
  }

  @media only screen and (max-width: 576px) {
    padding: 1.5rem;
  }
`;

export const ContentWrapper = styled("div")`
  display: flex;
  margin-left: 18rem;
  position: relative;
  top: 6rem;

  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    margin-left: 4rem;
    top: 3rem;
  }
  @media only screen and (max-width: 576px) {
    top: 3rem;
  }
`;

export const ViewDiv = styled("div")`
  width: 18rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 4px 4px 18px ${({ theme }) => theme.colors.sidebarShadow};
  background: transparent;
  z-index: 2;
  pointer-events: none;

  @media only screen and (max-width: 1023px) {
    width: 4rem;
  }
`;
