import styled from "@emotion/styled";

export const TitleWrapper = styled("div")`
  color: ${(props) => props.theme.colors.text};
  width: calc(100% - 14rem);
`;

export const Main = styled("main")`
  color: ${(props) => props.theme.colors.text};
  max-width: calc(100% - 14rem);

  @media only screen and (max-width: 1023px) {
    max-width: 100%;
  }
`;

export const StyledLink = styled("a")`
  color: ${(props) => props.theme.colors.textLink} !important;
  text-decoration: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  float: right;
`;

export const Ul = styled("ul")`
  padding-left: 0;
  margin: 0 0 1.5rem 0;
`;

export const Li = styled("li")`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0.4rem;
`;

export const HeadingWrapper = styled("div")`
  position: relative;
  margin: 0;
`;

export const SwtichWrapper = styled("div")`
  margin-left: 1rem;
  margin-top: 0.5rem;
  display: inline-block;
  position: relative;
`;

export const StyledHeading = styled("h2")`
  display: inline-block;
  margin-top: 3rem;
`;

export const StyledDiv = styled("div")`
  position: relative;
`;

export const StyledContainer = styled("div")`
  margin-bottom: 2rem;
  overflow-y: auto;
  max-height: 15rem;
  padding-right: 1rem;
  column-count: 4;
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.scrollbarTrack};
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${({ theme }) => theme.colors.scrollbar};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbar};
  }
`;

export const StyledHeading2 = styled("h2")`
  display: inline-block;
  margin-top: 3rem;
`;

export const CheckboxContainer = styled("div")`
  user-select: none;
`;

export const StyledInput = styled("input")`
  position: absolute;
  opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  & + label:before {
    content: "";
    margin-right: 10px;
    margin-top: 2px;
    display: inline-block;
    vertical-align: text-top;
    width: 1rem;
    height: 1rem;
    border-radius: 0.1rem;
    background: ${({ theme }) => theme.colors.checkboxUnselected};
  }

  &:hover + label:before {
    background: ${({ theme }) => theme.colors.checkboxHover};
  }
  &:checked + label:before {
    background: ${({ theme }) => theme.colors.checkbox};
  }

  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }
  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  &:checked + label:after {
    content: "";
    position: absolute;
    left: 3px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }

  &:hover&:checked + label:before {
    background: ${({ theme }) => theme.colors.checkboxSelectedHover};
  }
`;
