import React from "react";
import { Header } from "./style";

interface Props {
  children: React.ReactNode;
}

const HeaderLayout = ({ children }: Props) => <Header>{children}</Header>;

export default HeaderLayout;