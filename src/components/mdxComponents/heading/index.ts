import styled from "@emotion/styled";

const Heading1 = styled("h1")`
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Heading2 = styled("h2")`
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 1.5rem;

  :hover a {
    opacity: 1;
  }

  a {
    position: absolute;
    margin-left: calc(-20px - 0.5rem);
    padding-right: calc(0.5rem);
    opacity: 0;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textLink};
  }
`;

const Heading3 = styled("h3")`
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Heading4 = styled("h4")`
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Heading5 = styled("h5")`
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Heading6 = styled("h6")`
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 };
