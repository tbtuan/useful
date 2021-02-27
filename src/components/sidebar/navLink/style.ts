import styled from "@emotion/styled";
import { Link } from "gatsby";

export const ListItem = styled("li")`
  list-style: none;
  padding: 0;
  user-select: none;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;

    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    height: 3.5rem;

    padding-right: 4rem;
    padding-left: 4rem;

    @media only screen and (max-width: 1023px) {
      padding: 0;
    }

    svg {
      margin-left: auto;
      vertical-align: middle;
      display: inline-block;
    }
  }
`;

export const NavLink = styled(Link)`
  background-position: right bottom;
  &:hover:not(.active) {
    background: linear-gradient(
      to left,
      transparent 50%,
      ${({ theme }) => theme.colors.navLink} 50%
    );
    filter: drop-shadow(
      0px 4px 5px ${({ theme }) => theme.colors.navLinkShadow}
    );
    color: #fff !important;
    background-size: 200% 100%;
    background-position: left top;
    transition: all 0.2s ease-in-out;
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.textLink};
    color: #fff !important;
    filter: drop-shadow(
      0px 4px 5px ${({ theme }) => theme.colors.activeNavLinkShadow}
    );
  }
`;

export const IconWrapper = styled("div")`
  display: inline-block;
  vertical-align: "middle";
  margin-left: auto;

  @media only screen and (max-width: 1023px) {
    margin-right: auto;
  }
`;

export const TextWrapper = styled("span")`
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;
