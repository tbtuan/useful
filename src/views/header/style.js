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

  @media only screen and (max-width: 576px) {
    height: 3rem;
    padding-top: 1rem;
  }
`;

export const TitleWrapper = styled("div")`
  padding: 4rem;
  flex: 0 0 18em;
  background-color: ${({ theme }) => theme.colors.sidebar};
  text-align: center;
  align-self: center;

  @media only screen and (max-width: 1023px) {
    flex: 0 0 4em;
    padding: 3rem 0;
  }

  @media only screen and (max-width: 576px) {
    padding: 2rem;
  }
`;

export const Title = styled(Link)`
  margin-top: 4rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const TitleSpan = styled("span")`
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

export const TitleSpan2 = styled("span")`
  display: none;
  @media only screen and (max-width: 1023px) {
    display: block;
  }
`;