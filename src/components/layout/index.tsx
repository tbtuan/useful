import React from "react";

import Header from "components/header";
import Sidebar from "components/sidebar";
import NavLink from "components/sidebar/navLink";

import { ThemeSwitch } from "components/header/options/themeSwitch";

import Search from "components/header/search";
import Options from "components/header/options";
import Logo from "icons/logo.svg";

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
  relativePath: string;
  data: Data;
}

const Layout = ({ children, data }: Props) => {
  const docsLocation = data?.site?.siteMetadata?.docsLocation;
  const githubUrl = data?.site?.siteMetadata?.githubUrl;
  const relativePath = data?.mdx?.parent?.relativePath;

  return (
    <Div>
      <ViewDiv />
      <Header>
        <TitleWrapper>
          <LogoWrapper aria-label="Home" to="/">
            <Logo />
          </LogoWrapper>
        </TitleWrapper>
        <Search />
        {docsLocation && relativePath && githubUrl && (
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
        )}
      </Header>
      <Sidebar>
        <NavLink text="Commands" path="/commands">
          <TerminalIcon />
        </NavLink>
        <NavLink text="Languages" path="/lang">
          <CodeIcon />
        </NavLink>
        <NavLink text="Links" path="/links">
          <ExternalLinkAltIcon />
        </NavLink>
        <NavLink text="Setups" path="/setups">
          <CogsIcon />
        </NavLink>
        <NavLink text="Shortcuts" path="/shortcuts">
          <KeyboardIcon />
        </NavLink>
      </Sidebar>
      <ContentWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
    </Div>
  );
};

export default Layout;
