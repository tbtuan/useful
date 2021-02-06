import styled from "@emotion/styled";
import Clock from "icons/Clock.svg";

export const StyledSmall = styled("small")`
  color: ${({ theme }) => theme.colors.text};
`;

export const ClockIcon = styled(Clock)`
  color: ${({ theme }) => theme.colors.text};
  width: 10px;
  height: 10px;
  margin-right: 0.5rem;
`;
