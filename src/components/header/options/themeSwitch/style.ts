import styled from "@emotion/styled";
import Adjust from "icons/adjust.svg";

export const Switch = styled("label")`
  display: flex;
  user-select: none;
`;

export const AdjustIcon = styled(Adjust)`
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.switch};
  filter: drop-shadow(0px 4px 5px ${({ theme }) => theme.colors.switchShadow});
  :hover {
    opacity: 85%;
  }
`;

export const Input = styled("input")`
  /* Hide default HTML checkbox */
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
  cursor: pointer;
`;
