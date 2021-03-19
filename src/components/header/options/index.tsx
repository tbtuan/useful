import { useState, useRef } from "react";
import { useClickOutside } from "hooks/useClickOutside";
import {
  Container,
  MobileContainer,
  BarsIcon,
  CloseIcon,
  Menu,
  ContainerWrapper,
} from "./style";

interface Props {
  children: React.ReactNode;
}

const OptionsLayout = ({ children }: Props) => {
  const [show, setShow] = useState(false);

  const ref = useRef(null);

  useClickOutside(ref, () => setShow(false));

  return (
    <>
      <MobileContainer ref={ref}>
        <Menu onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? <CloseIcon /> : <BarsIcon />}
        </Menu>
        <ContainerWrapper show={show}>{children}</ContainerWrapper>
      </MobileContainer>
      <Container>{children}</Container>
    </>
  );
};

export default OptionsLayout;
