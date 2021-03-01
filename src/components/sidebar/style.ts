import styled from "@emotion/styled";

export const StyledSidebar = styled("aside")`
  position: fixed;
  top: 4rem;
  bottom: 0;
  width: 18rem;

  background-color: ${({ theme }) => theme.colors.sidebar};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1023px) {
    position: absolute;
    top: auto;
    width: 100%;
    z-index: 2;
  }
`;

export const Nav = styled("nav")`
  width: 100%;
  padding-top: 3rem;
  text-align: justify;

  li {
    list-style-type: none;
    width: auto;
    margin: 0;
  }

  @media only screen and (max-width: 1023px) {
    padding-top: 0;

    li {
      width: 100%;
    }
  }
`;

export const Ul = styled("ul")`
  margin-left: 0;
  padding-inline-start: 0;

  @media only screen and (max-width: 1023px) {
    margin: 0;
    display: flex;
  }
`;
