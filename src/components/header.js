import React from "react";
import styled from "@emotion/styled";
import { ThemeSwitch } from "./themeSwitch";

import { Edit, ThList } from "emotion-icons/fa-solid";
import { Bookmark as NotBookmark } from "emotion-icons/fa-regular";
import { Bookmark } from "emotion-icons/fa-solid";
import { Github } from "emotion-icons/fa-brands";

import Link from "./link";

import Search from "./search";

const Header = styled("header")`
  width: 100%;
  height: 5rem;
  padding-top: 2rem;
  position: fixed;

  display: flex;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background};

  @media only screen and (max-width: 576px) {
    height: 3rem;
    padding-top: 1rem;
  }
`;

const TitleWrapper = styled("div")`
  padding: 4rem;
  flex: 0 0 18em;
  background-color: ${({ theme }) => theme.colors.sidebar};
  text-align: center;
  align-self: center;

  @media only screen and (max-width: 1023px) {
    flex: 0 0 4em;
    padding: 3rem 0;
  }

  @media only screen and (max-width: 576px) {
    padding: 2rem;
  }
`;

const OptionsWrapper = styled("div")`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  display: flex;
`;

const Title = styled(Link)`
  margin-top: 4rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TitleSpan = styled("span")`
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

const TitleSpan2 = styled("span")`
  display: none;
  @media only screen and (max-width: 1023px) {
    display: block;
  }
`;

const EditButton = styled(Link)`
  outline: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.background};
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.colors.editButton};
  border-radius: 0.5rem;
  padding: 0.5rem 1.25rem 0.5rem 1.25rem;
  filter: drop-shadow(
    0px 4px 5px ${({ theme }) => theme.colors.editButtonShadow}
  );
  user-select: none;
  :hover {
    opacity: 85%;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  user-select: none;
  margin: 0;
  margin-right: auto;
  :hover {
    opacity: 85%;
  }
  display: flex;
`;

const StyledGithub = styled(Github)`
  // width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.switch};
  filter: drop-shadow(0px 4px 5px ${({ theme }) => theme.colors.switchShadow});
  cursor: pointer;
  //user-select: none;
  margin: 0;
  :hover {
    opacity: 85%;
  }
`;

const StyledEdit = styled(Edit)`
  width: 0.8rem;
  height: 0.8rem;
  margin-left: auto;
  margin-right: 0.2rem;
  color: ${({ theme }) => theme.colors.background};
`;

const Container = styled("div")`
  margin-left: auto;
  width: 14rem;
  display: flex;
  align-items: center;
  padding-right: 4.5rem;

  @media only screen and (max-width: 576px) {
    flex: none;
  }
`;

const HeaderLayout = ({ docsLocation }) => (
  <Header>
    <TitleWrapper>
      <Title to="/">
        <TitleSpan>/useful</TitleSpan>
        <TitleSpan2>/</TitleSpan2>
      </Title>
    </TitleWrapper>
    <Search />
    <OptionsWrapper>
      <Container>
        <StyledLink to={githubUrl}>
          <StyledGithub />
        </StyledLink>
        <ThemeSwitch />
        <EditButton to={docsLocation}>
          <StyledEdit />
          Edit
        </EditButton>
      </Container>
    </OptionsWrapper>
  </Header>
);

export default HeaderLayout;
