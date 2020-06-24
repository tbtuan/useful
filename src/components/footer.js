import React from "react";
import styled from "@emotion/styled";
import { Github } from "emotion-icons/fa-brands";

const Footer = styled("footer")`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;

  @media only screen and (max-width: 1023px) {
    padding: 0;
    padding-bottom: 2rem;
  }
`;

const StyledLink = styled("a")`
  width: 100%;
  text-decoration: none;

  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.githubButton};
    margin-right: 0.5rem;

    @media only screen and (max-width: 1023px) {
      margin: auto;
    }
  }

  :hover {
    opacity: 85%;
  }
`;

const StyledGithub = styled(Github)`
  width: 2.5rem;
  height: 2.5rem;
  fill: ${({ theme }) => theme.colors.link};
  display: inline-block;
  vertical-align: middle;
`;

const TextWrapper = styled("div")`
  display: inline-block;
  vertical-align: "middle";

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

const FirstLine = styled("span")`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.githubButton};
`;

const SecondLine = styled("span")`
  color: ${({ theme }) => theme.colors.githubButton};
`;

const FooterLayout = () => (
  <Footer>
    <StyledLink href="https://github.com/tbtuan/useful" target="_blank">
      <StyledGithub />
      <TextWrapper>
        <FirstLine>VIEW ON</FirstLine>
        <br />
        <SecondLine>Github</SecondLine>
      </TextWrapper>
    </StyledLink>
  </Footer>
);

export default FooterLayout;
