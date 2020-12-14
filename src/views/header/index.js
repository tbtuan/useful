import React from "react";
import { ThemeSwitch } from "../themeSwitch";
import {
  Container,
  EditButton,
  Header,
  OptionsWrapper,
  StyledEdit,
  StyledGithub,
  StyledLink,
  Title,
  TitleSpan,
  TitleSpan2,
  TitleWrapper
} from "./style"


import Search from "../search";

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
        <StyledLink to={"https://github.com/tbtuan/useful"}>
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
