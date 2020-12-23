import styled from "@emotion/styled";
import Link from "components/link";

export const Header = styled("header")`
  width: 100%;
  height: 5rem;
  padding-top: 2rem;
  position: fixed;

  display: flex;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background};

  @media only screen and (max-width: 1023px) {
    height: 3rem;
    padding-top: 1rem;
  }
`;

export const TitleWrapper = styled("div")`
  padding: 3rem;
  margin-top: 5px;
  flex: 0 0 18em;
  background-color: ${({ theme }) => theme.colors.sidebar};
  text-align: center;
  align-self: center;

  @media only screen and (max-width: 1023px) {
    flex: 0 0 4em;
    padding: 1rem;
  }
`;