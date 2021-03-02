import styled from "@emotion/styled";
import Bars from "icons/bars.svg";
import Close from "icons/close.svg";

interface Props {
  show: boolean;
}

export const CloseIcon = styled(Close)`
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  fill: ${({ theme }) => theme.colors.switch};
  :hover {
    opacity: 85%;
  }
`;

export const BarsIcon = styled(Bars)`
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  fill: ${({ theme }) => theme.colors.switch};
  :hover {
    opacity: 85%;
  }
`;

export const MobileContainer = styled("div")`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: auto;
  padding-right: 3rem;
  display: none;

  @media only screen and (max-width: 576px) {
    display: inline-flex;
  }
`;

export const Container = styled("div")`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: auto;
  padding-right: 4.5rem;
  @media only screen and (max-width: 1023px) {
    padding-right: 3rem;
    width: 12.5rem;
  }
  @media only screen and (max-width: 576px) {
    display: none;
  }
`;

export const Menu = styled("label")`
  display: flex;
  user-select: none;
`;

export const ContainerWrapper = styled("div")`
  display: ${(props: Props) => (props.show ? `flex` : `none`)};
  flex-direction: row;
  position: absolute;
  z-index: -2;
  top: calc(100% + 0.5em - 3rem);
  width: 40vw;
  filter: drop-shadow(0px 4px 5px ${({ theme }) => theme.colors.searchShadow});
  background: ${({ theme }) => theme.colors.search};
  margin-left: 2rem;
  gap: 1rem;
  align-items: center;
  margin-left: auto;

  border-radius: 0.25rem;
  * {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 576px) {
    top: calc(100% - 4rem);
    width: 100%;
    padding: 5rem 1.5rem 1rem;
    left: 0;
  }
`;
