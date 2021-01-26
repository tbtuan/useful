import { Container, OptionsWrapper } from "./style";

const OptionsLayout = ({ children }) => (
  <OptionsWrapper>
    <Container>{children}</Container>
  </OptionsWrapper>
);

export default OptionsLayout;
