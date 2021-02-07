import styled from "@emotion/styled";

export const TableOfContents = styled("ol")`
  max-width: 18rem;
  position: fixed;
  top: calc(8rem);
  left: calc(100% - 14rem);
  max-height: calc(100vh - 4rem - 2.5rem - 3rem - 3rem);
  overflow: auto;
  overflow-x: hidden;
  padding-bottom: 2rem;
  order: 2;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 1023px) {
    max-width: 18rem;
    position: static;
    overflow: auto;
    order: 1;
  }
`;

export const TOCTitle = styled("li")`
  list-style-type: none;
  font-size: 0.8rem;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding-left: 0;
  margin: 0;

  color: ${({ theme }) => theme.colors.text};
`;

export const Li = styled("li")`
  list-style: none;
  margin: 0;

  a {
    font-size: 0.8rem;
    padding-left: 0;
    text-decoration: none;
    font-weight: 400;
    padding-top: 1rem;
    display: block;
    position: relative;

    color: ${(props) =>
      props.active ? props.theme.colors.textLink : props.theme.colors.text};

    &:hover {
      color: ${({ theme }) => theme.colors.textLink};
    }
  }
`;
