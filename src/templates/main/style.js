import styled from "@emotion/styled";

export const TitleWrapper = styled("div")`
  color: ${(props) => props.theme.colors.text};
  padding-bottom: 4rem;

  @media only screen and (max-width: 1023px) {
    padding-bottom: 2rem;
  }
`;

export const Main = styled("main")`
  color: ${(props) => props.theme.colors.text};
  display: grid;
  max-width: calc(100% - 14rem);
  grid-template-columns: repeat(2, minmax(0, 20rem));
  grid-gap: 3.5rem;

  @media only screen and (max-width: 1023px) {
    max-width: 100%;
  }
`;
