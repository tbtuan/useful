import styled from "@emotion/styled";
import Link from "components/link";

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
  font-size: 14px;
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

a:hover {
  background-color: ${({ theme }) => theme.colors.link};
  color: #fff !important;
}
`;

export const ActiveLink = styled(Link)`
background-color: ${({ theme }) => theme.colors.link};
color: #fff !important;
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