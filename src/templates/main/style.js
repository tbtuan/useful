import styled from "@emotion/styled";

export const TitleWrapper = styled("div")`
  color: ${(props) => props.theme.colors.text};
  padding-bottom: 4rem;

  @media only screen and (max-width: 1023px) {
    padding-bottom: 2rem;
  }
`;
