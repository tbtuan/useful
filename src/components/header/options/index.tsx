import React, { useState } from "react";
import {
  Container,
  MobileContainer,
  BarsIcon,
  Menu,
  ContainerWrapper,
} from "./style";

interface Props {
  children: React.ReactNode;
}

const OptionsLayout = ({ children }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <MobileContainer>
        <Menu htmlFor="" onClick={() => setShow((prevShow) => !prevShow)}>
          <BarsIcon />
        </Menu>
        <ContainerWrapper show={show}>{children}</ContainerWrapper>
      </MobileContainer>
      <Container>{children}</Container>
    </>
  );
};

export default OptionsLayout;
