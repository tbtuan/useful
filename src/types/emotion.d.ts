import "@emotion/react";

interface Color {
  background: string;
  heading: string;
  placeholder: string;
  text: string;
  small: string;
  preFormattedText: string;
  textLink: string;
  // Sidebar
  sidebar: string;
  sidebarShadow: string;
  activeNavLinkShadow: string;
  navLinkShadow: string;
  // Header
  seperator: string;
  switch: string;
  switchShadow: string;
  editButton: string;
  editButtonShadow: string;
  // Search
  search: string;
  searchShadow: string;
  searchHover: string;
  tableHeader: string;
  trSecondth: string;
  kbd: string;
  kbdText: string;
  kbdBorder: string;
}

declare module "@emotion/react" {
  export interface Theme {
    [color: string]: Color;
  }
}
