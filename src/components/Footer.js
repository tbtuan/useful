import React from 'react';
import styled from '@emotion/styled';
import { Github } from 'emotion-icons/fa-brands';

const Footer = styled('footer')`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
`;

const StyledGithub = styled(Github)`
  width: 2rem;
  fill: ${({ theme }) => theme.colors.link};
`;

const StyledLink = styled('a')`
  width: 10rem;
  //background-color: ${({ theme }) => theme.colors.navbarLink};

  svg {
    color: ${({ theme }) => theme.colors.navbarLink};
    margin-right: 0.5rem;
  }
`;

const FooterLayout = () => (
  <Footer>
    <StyledLink href="https://github.com/tbtuan/useful" target="_blank">
      <StyledGithub />
      <p>VIEW ON</p>
      <p>Github</p>
    </StyledLink>
  </Footer>
);

export default FooterLayout;
