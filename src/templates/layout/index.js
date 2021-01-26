import { MDXProvider } from "@mdx-js/react";
import mdxComponents from "components/MDXComponents";

import ThemeProvider from "contexts/themeContext";

import Header from "components/header";
import Sidebar from "components/sidebar";
import NavLink from "components/sidebar/navLink";
import Code from "icons/code";
import Cogs from "icons/cogs";
import Terminal from "icons/terminal";
import Keyboard from "icons/keyboard";
import ExternalLinkAlt from "icons/externalLinkAlt";
import { ThemeSwitch } from "components/header/options/themeSwitch";

import Search from "components/header/search";
import Options from "components/header/options";
import Logo from "icons/logo";

import {
  Content,
  ContentWrapper,
  ViewDiv,
  Wrapper,
  Icon,
  TitleWrapper,
  LogoWrapper,
  EditButton,
  StyledEdit,
  StyledGithub,
  GithubLink,
} from "./style";

const Layout = ({ children, location, data }) => {
  if (typeof window === "undefined") {
    return null;
  }
  const { mdx } = data;

  return (
    <ThemeProvider>
      <MDXProvider components={mdxComponents}>
        <Wrapper>
          <ViewDiv />
          <Header>
            <TitleWrapper>
              <LogoWrapper to="/">
                <Logo />
              </LogoWrapper>
            </TitleWrapper>
            <Search />
            <Options>
              <GithubLink href={"https://github.com/tbtuan/useful"}>
                <StyledGithub />
              </GithubLink>
              <ThemeSwitch />
              <EditButton
                href={
                  "https://github.com/tbtuan/useful/tree/master/content/" +
                  mdx.parent.relativePath
                }
              >
                <StyledEdit />
                Edit
              </EditButton>
            </Options>
          </Header>
          <Sidebar>
            <NavLink text="Commands" path="/commands" location={location}>
              <Icon tag={Terminal} />
            </NavLink>
            <NavLink text="Languages" path="/lang" location={location}>
              <Icon tag={Code} />
            </NavLink>
            <NavLink text="Links" path="/links" location={location}>
              <Icon tag={ExternalLinkAlt} />
            </NavLink>
            <NavLink text="Setups" path="/setups" location={location}>
              <Icon tag={Cogs} />
            </NavLink>
            <NavLink text="Shortcuts" path="/shortcuts" location={location}>
              <Icon tag={Keyboard} />
            </NavLink>
          </Sidebar>
          <ContentWrapper>
            <Content>{children}</Content>
          </ContentWrapper>
        </Wrapper>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default Layout;
