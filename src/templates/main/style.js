import styled from "@emotion/styled";
import Cog from "icons/cog.svg";
import { Link } from "gatsby";

export const TitleWrapper = styled("div")`
  color: ${(props) => props.theme.colors.text};
`;

export const CogIcon = styled(Cog)`
  fill: #76828c;
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
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

export const StyledLink = styled(Link)`
  svg {
    fill: ${(props) => props.theme.colors.text};

    :hover {
      fill: ${(props) => props.theme.colors.textLink};
    }
  }
`;
