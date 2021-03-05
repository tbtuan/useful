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
  navLink: string;
  activeNavLinkShadow: string;
  navLinkShadow: string;
  // Theme switch
  switch: string;
  switchbg: string;
  // Header
  seperator: string;
  options: string;
  optionsbg: string;
  switchShadow: string;
  editButtonText: string;
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
  // Tag
  tag: string;
  // Scrollbar
  scrollbarTrack: string;
  scrollbar: string;
  // Breadcrumb
  breadcrumb: string;
}

declare module "@emotion/react" {
  export interface Theme {
    [color: string]: Color;
  }
}
