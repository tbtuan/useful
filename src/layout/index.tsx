import { MDXProvider } from "@mdx-js/react";
import mdxComponents from "components/mdxComponents";
import React from "react";

import ThemeProvider from "contexts/themeContext";

import Header from "components/header";
import Sidebar from "components/sidebar";
import NavLink from "components/sidebar/navLink";

import { ThemeSwitch } from "components/header/options/themeSwitch";

import Search from "components/header/search";
import Options from "components/header/options";
import Logo from "icons/Logo.svg";

import {
  Div,
  Content,
  CodeIcon,
  TerminalIcon,
  KeyboardIcon,
  CogsIcon,
  ExternalLinkAltIcon,
  ContentWrapper,
  ViewDiv,
  TitleWrapper,
  LogoWrapper,
  EditButton,
  EditIcon,
  GithubIcon,
  GithubLink,
} from "./style";

interface Props {
  children?: React.ReactNode;
  location: Location;
  relativePath: string;
  siteMetadata: SiteMetadata;
}

const Layout = ({
  children,
  location,
  relativePath,
  siteMetadata: { docsLocation, githubUrl },
}: Props) => {
  return (
    <ThemeProvider>
      <MDXProvider components={mdxComponents}>
        <Div>
          <ViewDiv />
          <Header>
            <TitleWrapper>
              <LogoWrapper aria-label="Home" to="/">
                <Logo />
              </LogoWrapper>
            </TitleWrapper>
            <Search />
            <Options>
              <GithubLink href={githubUrl}>
                <GithubIcon />
              </GithubLink>
              <ThemeSwitch />
              <EditButton href={docsLocation + relativePath}>
                <EditIcon />
                Edit
              </EditButton>
            </Options>
          </Header>
          <Sidebar>
            <NavLink text="Commands" path="/commands" location={location}>
              <TerminalIcon />
            </NavLink>
            <NavLink text="Languages" path="/lang" location={location}>
              <CodeIcon />
            </NavLink>
            <NavLink text="Links" path="/links" location={location}>
              <ExternalLinkAltIcon />
            </NavLink>
            <NavLink text="Setups" path="/setups" location={location}>
              <CogsIcon />
            </NavLink>
            <NavLink text="Shortcuts" path="/shortcuts" location={location}>
              <KeyboardIcon />
            </NavLink>
          </Sidebar>
          <ContentWrapper>
            <Content>{children}</Content>
          </ContentWrapper>
        </Div>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default Layout;
