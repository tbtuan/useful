import React from "react";
import { StyledSidebar, Nav, Ul } from "./style";

interface Props {
  children: React.ReactNode;
}

const SidebarLayout = ({ children }: Props) => (
  <StyledSidebar id="navbar">
    <Nav>
      <Ul>{children}</Ul>
    </Nav>
  </StyledSidebar>
);

export default SidebarLayout;
