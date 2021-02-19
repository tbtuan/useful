import styled from "@emotion/styled";

export const Padding = styled("div")`
  padding: 10rem 0;
`;

const StyledHeading = styled("h1")`
  line-height: 1.5;
  font-weight: 700;
  flex: 1;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.heading};
  display: inline;
`;

const Main = styled("main")`
  color: ${(props) => props.theme.colors.text};
  max-width: calc(100% - 14rem);

  @media only screen and (max-width: 1023px) {
    max-width: 100%;
  }
`;

const TitleWrapper = styled("div")`
  padding-bottom: 4rem;

  @media only screen and (max-width: 1023px) {
    padding-bottom: 2rem;
  }
`;

const ContentWrapper = styled("div")`
  display: flex;
  align-items: flex-start;

  @media only screen and (max-width: 1023px) {
    display: block;
  }
`;

export {
  StyledHeading,
  Main as StyledMainWrapper,
  TitleWrapper,
  ContentWrapper,
};
