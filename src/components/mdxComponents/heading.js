import styled from "@emotion/styled";

const Heading1 = styled("h1")`
  font-size: 32px;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: 16px;
  margin-top: 32px;
`;

const Heading2 = styled("h2")`
  font-size: 26px;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: 16px;
  /* Anchor link */
  padding-top: 8rem;
  margin-top: -8rem;

  :hover a {
    opacity: 1;
  }

  a {
    position: absolute;
    margin-top: -3px;
    margin-left: calc(-20px - 0.5rem);
    padding-right: calc(0.5rem);
    opacity: 0;
  }
`;

const Heading3 = styled("h3")`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 16px;
  margin-top: 32px;
`;

const Heading4 = styled("h4")`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 16px;
  margin-top: 32px;
`;

const Heading5 = styled("h5")`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 16px;
  margin-top: 32px;
`;

const Heading6 = styled("h6")`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 16px;
  margin-top: 32px;
`;

export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 };
