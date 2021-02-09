import styled from "@emotion/styled";
import Clock from "icons/Clock.svg";

export const StyledSmall = styled("small")`
  color: ${({ theme }) => theme.colors.small};
`;

export const ClockIcon = styled(Clock)`
  color: ${({ theme }) => theme.colors.small};
  width: 9px;
  height: 9px;
  margin-right: 0.3rem;
`;
