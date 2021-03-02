import styled from "@emotion/styled";
import AngleRight from "icons/angle-right.svg";

import { Link } from "gatsby";

export const BreadcrumbLink = styled(Link)`
  color: ${({ theme }) => theme.colors.breadcrumb};
  font-size: 0.9rem;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.colors.textLink};
    text-decoration: underline;
  }
`;

export const AngleRightIcon = styled(AngleRight)`
  fill: ${({ theme }) => theme.colors.breadcrumb};
  width: 1rem;
  height: 1rem;
  vertical-align: middle;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
`;

export const Nav = styled("nav")`
  margin-bottom: 1.5rem;
`;
