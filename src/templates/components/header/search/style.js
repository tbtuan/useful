import styled from "@emotion/styled";
import Search from "icons/search";
import Link from "components/link";

export const StyledSearch = styled(Search)`
  position: relative;
  left: 0.25rem;
  width: 1rem;
  height: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const SearchBox = styled("input")`
  font-size: 1rem;
  line-height: 2rem;

  border-width: 0 0 2px;
  border-color: ${({ theme }) => theme.colors.text};
  outline: 0;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  padding-left: 2rem;
  margin-left: -1rem;

  :focus {
    border-color: ${({ theme }) => theme.colors.link};
  }

  :hover {
    border-color: ${({ theme }) => theme.colors.link};
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.text};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SearchContainer = styled("div")`
  background-color: ${({ theme }) => theme.colors.background};
  padding-left: 4rem;
  flex: 0 0 20em;

  display: flex;
  justify-content: center;
  align-items: center;
  place-content: flex-start;

  @media only screen and (max-width: 576px) {
    flex: none;
    padding-left: 2rem;
    width: 40%;
  }
`;

export const HitsWrapper = styled("div")`
  display: ${(props) => (props.show ? `flex` : `none`)};
  flex-direction: column;
  position: absolute;
  z-index: 2;
  top: calc(100% + 0.5em);
  width: 40vw;
  filter: drop-shadow(0px 4px 5px ${({ theme }) => theme.colors.searchShadow});
  padding: 1rem;
  background: ${({ theme }) => theme.colors.search};

  border-radius: 0.25rem;
  * {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 576px) {
    width: 60vw;
  }
`;

export const Hits = styled("li")`
  font-size: 0.9rem;
`;

export const SearchLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  list-style: none;
  text-decoration: none;
  padding: 0.8rem 0.8rem;
  border-radius: 0.25rem;
  margin: 0;

  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.searchHover : `transparent`};
`;

export const SearchTitle = styled("span")`
  font-weight: 700;
  font-size: 1.2rem;
`;