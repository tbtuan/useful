import { Header, TitleWrapper, LogoWrapper } from "./style";

import Search from "./search";
import Options from "./options";
import Logo from "icons/logo";

const HeaderLayout = ({ docsLocation }) => (
  <Header>
    <TitleWrapper>
      <LogoWrapper to="/">
        <Logo />
      </LogoWrapper>
    </TitleWrapper>
    <Search />
    <Options docsLocation={docsLocation} />
  </Header>
);

export default HeaderLayout;
