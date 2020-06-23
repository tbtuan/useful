import React from "react";
import styled from "@emotion/styled";
import { ThemeSwitch } from "./themeSwitch";

import { Edit, Adjust, ThList } from "emotion-icons/fa-solid";

import Link from "./link";

import Search from "./search/searchContainer";

const Header = styled("header")`
  width: 100%;
  height: 6rem;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  z-index: 1;
`;

const TitleWrapper = styled("div")`
  flex: 0 0 18em;
  background-color: ${({ theme }) => theme.colors.sidebar};
  text-align: center;
  padding-top: 3rem;
`;

const SearchWrapper = styled("div")`
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 3rem;
  padding-left: 4rem;
  flex: 0 0 20em;
`;

const OptionsWrapper = styled("div")`
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 3rem;
  width: 100%;
  display: flex;
`;

const Title = styled(Link)`
  margin-top: 4rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledThList = styled(ThList)`
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.switch};
  filter: drop-shadow(0px 4px 5px ${({ theme }) => theme.colors.switchShadow});
  cursor: pointer;
`;

const EditButton = styled(Link)`
  outline: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.background};
  font-size: 0.85rem;
  background-color: ${({ theme }) => theme.colors.editButton};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  filter: drop-shadow(
    0px 4px 5px ${({ theme }) => theme.colors.editButtonShadow}
  );
  // filter: drop-shadow(0px 4px 5px rgba(247, 119, 35, 0.5));
`;

const StyledEdit = styled(Edit)`
  width: 0.9rem;
  height: 0.9rem;
  margin-left: auto;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.background};
`;

const IconContainer = styled("span")`
  height: 20px;
  padding-right: 1rem;
`;

const Container = styled("div")`
  margin-left: auto;
  width: 14rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4rem;
`;

const HeaderLayout = ({
  title,
  docsLocation,
  isDarkThemeActive,
  toggleActiveTheme,
}) => {
  return (
    <Header>
      <TitleWrapper>
        <Title to="/">{title}</Title>
      </TitleWrapper>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <OptionsWrapper>
        <Container>
          <IconContainer>
            <StyledThList />
          </IconContainer>
          <IconContainer>
            <ThemeSwitch
              isDarkThemeActive={isDarkThemeActive}
              toggleActiveTheme={toggleActiveTheme}
            />
          </IconContainer>
          <EditButton to={docsLocation}>
            <StyledEdit />
            Edit
          </EditButton>
        </Container>
      </OptionsWrapper>
    </Header>
  );
};

export default HeaderLayout;
