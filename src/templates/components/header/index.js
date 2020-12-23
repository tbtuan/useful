import {
  Header,
  Title,
  TitleSpan,
  TitleSpan2,
  TitleWrapper
} from "./style"

import Search from "./search";
import Options from "./options"
import Logo from "icons/logo"
import Link from "components/link";

const HeaderLayout = ({ docsLocation }) => (
  <Header>
    <TitleWrapper>
      <Link to="/">
        <Logo />
        {/* <TitleSpan>/useful</TitleSpan>
        <TitleSpan2>/</TitleSpan2> */}
      </Link>
    </TitleWrapper>
    <Search />
    <Options docsLocation={docsLocation} />
  </Header>
);

export default HeaderLayout;
