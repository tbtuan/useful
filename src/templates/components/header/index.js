import {
  Header,
  Title,
  TitleSpan,
  TitleSpan2,
  TitleWrapper
} from "./style"

import Search from "./search";
import Options from "./options"

const HeaderLayout = ({ docsLocation }) => (
  <Header>
    <TitleWrapper>
      <Title to="/">
        <TitleSpan>/useful</TitleSpan>
        <TitleSpan2>/</TitleSpan2>
      </Title>
    </TitleWrapper>
    <Search />
    <Options docsLocation={docsLocation} />
  </Header>
);

export default HeaderLayout;
