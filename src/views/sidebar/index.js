import React from "react";
import Navigation from "../navigation";
import { StyledSidebar } from "./style"

const SidebarLayout = ({ location }) => (
  <StyledSidebar>
    <Navigation location={location} />
  </StyledSidebar>
);

export default SidebarLayout;
