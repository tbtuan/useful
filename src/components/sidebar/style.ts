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

  box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);

  @media only screen and (max-width: 1023px) {
    width: 4rem;
    top: 3rem;
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
    padding-top: 2rem;
  }
`;

export const Ul = styled("ul")`
  margin-left: 0;
  padding-inline-start: 0;
`;
