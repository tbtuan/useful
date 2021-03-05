import styled from "@emotion/styled";
import Search from "icons/search.svg";
import Clear from "icons/clear.svg";
import { Link } from "gatsby";
import { Theme } from "@emotion/react";

interface Props {
  show: boolean;
}

interface LinkProps {
  selected: boolean;
  theme?: Theme;
}

export const Overlay = styled("div")`
  @media only screen and (max-width: 576px) {
    background-color: #00000030;
    position: absolute;
    top: 4rem;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    z-index: -3;
  }
`;

export const StyledSearch = styled(Search)`
  position: relative;
  width: 1rem;
  height: 1rem;
  z-index: 2;
  color: ${({ theme }) => theme.colors.text};
  left: ${({ show }) => (show ? `1.25rem` : `0.25rem`)};
  @media only screen and (max-width: 576px) {
    left: 0.25rem;
  }
`;

export const SearchBox = styled("input")`
  line-height: 2rem;

  border-width: 0 0 2px;
  border-color: ${({ theme }) => theme.colors.text};
  outline: 0;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  max-width: ${({ show }: Props) => (show ? `100%` : `18rem`)};
  padding-left: 2rem;
  margin-left: -1rem;

  :focus {
    border-color: ${({ theme }) => theme.colors.textLink};
  }

  padding: ${({ show }) => (show ? `0.5rem` : `0rem`)};
  padding-left: ${({ show }) => (show ? `3rem` : `2rem`)};
  width: ${({ show }) => (show ? `40vw` : `100%`)};

  @media only screen and (min-width: 576px) {
    :hover {
      border-color: ${({ theme }) => theme.colors.textLink};
    }
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.placeholder};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.colors.placeholder};
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  @media only screen and (max-width: 576px) {
    /* padding: 0;
    padding-left: 2rem;
    width: 100%; */
    padding: 0;
    padding-left: 2rem;
    padding-right: 1.5rem;
    width: 100%;
  }
`;

export const SearchContainer = styled("div")`
  padding-left: 4rem;
  padding-right: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  place-content: flex-start;

  @media only screen and (max-width: 1023px) {
    padding-left: 3rem;
  }

  @media only screen and (max-width: 576px) {
    flex: none;
    padding-left: 1.5rem;
    padding-right: 0rem;
    width: 70%;
  }
`;

export const ClearInputDiv = styled("div")`
  width: 1rem;
`;

export const ClearInput = styled("label")`
  position: relative;
  right: 1rem;
  display: flex;
  user-select: none;
`;

export const ClearIcon = styled(Clear)`
  display: none;
  @media only screen and (max-width: 576px) {
    display: block;
    cursor: pointer;
    width: 0.9rem;
    height: 0.9rem;
    fill: ${({ theme }) => theme.colors.options};
  }
`;

export const HitsWrapper = styled("div")`
  display: ${(props: Props) => (props.show ? `flex` : `none`)};
  flex-direction: column;
  position: absolute;
  z-index: -2;
  top: calc(100% + 0.5em - 3rem);
  width: 40vw;
  filter: drop-shadow(0px 4px 5px ${({ theme }) => theme.colors.searchShadow});
  padding: 1rem;
  padding-top: 4rem;
  background: ${({ theme }) => theme.colors.search};

  border-radius: 0.25rem;
  * {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 576px) {
    top: calc(100% - 4rem);
    width: 100%;
    padding: 5rem 1rem 1rem;
    left: 0;
    border-radius: 0;
  }
`;

export const SearchLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  list-style: none;
  text-decoration: none;
  padding: 0.8rem 0.8rem;
  border-radius: 0.25rem;
  margin: 0;

  background-color: ${({ selected, theme }: LinkProps) =>
    selected ? theme.colors.searchHover : `transparent`};

  @media only screen and (max-width: 576px) {
    padding: 0.4rem 0.8rem;
  }
`;

export const SearchTitle = styled("span")`
  font-weight: 700;
`;
