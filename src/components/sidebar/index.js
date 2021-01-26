import { StyledSidebar, Nav, Ul } from "./style";

const SidebarLayout = ({ children }) => (
  <StyledSidebar>
    <Nav>
      <Ul>{children}</Ul>
    </Nav>
  </StyledSidebar>
);

export default SidebarLayout;
