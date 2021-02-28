import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import { Link } from "gatsby";
import Github from "icons/Github.svg";
import Edit from "icons/Edit.svg";

import Code from "icons/Code.svg";
import Terminal from "icons/Terminal.svg";
import ExternalLinkAlt from "icons/ExternalLinkAlt.svg";
import Cogs from "icons/Cogs.svg";
import Keyboard from "icons/Keyboard.svg";

const iconBase = css`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: 0.75rem;

  @media only screen and (max-width: 1023px) {
    margin-right: 0;
  }
`;

export const TerminalIcon = styled(Terminal)`
  ${iconBase};
`;

export const ExternalLinkAltIcon = styled(ExternalLinkAlt)`
  ${iconBase};
`;

export const CodeIcon = styled(Code)`
  ${iconBase};
`;

export const CogsIcon = styled(Cogs)`
  ${iconBase};
`;

export const KeyboardIcon = styled(Keyboard)`
  ${iconBase};
`;

export const Content = styled("main")`
  min-width: 0;
  width: 100%;
  padding-right: 4rem;
  padding-left: 4rem;

  @media only screen and (max-width: 1023px) {
    padding: 3rem;
  }

  @media only screen and (max-width: 576px) {
    padding: 1.5rem;
  }
`;

export const Div = styled("div")`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentWrapper = styled("div")`
  display: flex;
  margin-left: 18rem;
  position: relative;
  top: 8rem;

  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    margin-left: 0rem;
    top: 3rem;
    padding-bottom: 3rem;
  }
`;

export const ViewDiv = styled("div")`
  width: 18rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 4px 0px 10px ${({ theme }) => theme.colors.sidebarShadow};
  background: transparent;
  z-index: 2;
  pointer-events: none;

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

export const TitleWrapper = styled("div")`
  padding: 2.5rem 0 2.1rem 0;
  flex: 0 0 18em;
  background-color: ${({ theme }) => theme.colors.sidebar};
  text-align: center;
  align-self: center;

  @media only screen and (max-width: 1023px) {
    flex: 0;
    margin-left: 3rem;
    padding: 0rem;
  }

  @media only screen and (max-width: 576px) {
    margin-left: 1.5rem;
  }
`;

export const LogoWrapper = styled(Link)`
  :hover {
    rect:first-of-type {
      fill: ${({ theme }) => theme.colors.textLink};
      transition: all 0.2s ease-out;
    }
  }
  @media only screen and (max-width: 1023px) {
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const EditButton = styled("a")`
  text-decoration: none;
  outline: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.editButtonText};
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
  display: flex;
  align-items: center;
`;

export const GithubLink = styled("a")`
  cursor: pointer;
  user-select: none;
  :hover {
    opacity: 85%;
  }
  display: flex;
`;

export const GithubIcon = styled(Github)`
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.switch};
  filter: drop-shadow(0px 4px 5px ${({ theme }) => theme.colors.switchShadow});
  cursor: pointer;
  :hover {
    opacity: 85%;
  }
`;

export const EditIcon = styled(Edit)`
  width: 0.8rem;
  height: 0.6rem;
  margin-right: 0.2rem;
  color: ${({ theme }) => theme.colors.editButtonText};
`;
