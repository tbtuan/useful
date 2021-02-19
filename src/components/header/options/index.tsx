import React from "react";
import { Container } from "./style";

interface Props {
  children: React.ReactNode;
}

const OptionsLayout = ({ children }: Props) => (
  <Container>{children}</Container>
);

export default OptionsLayout;
