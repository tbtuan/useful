import React, { useContext, useMemo } from "react";
import styled from "@emotion/styled";

import Adjust from "emotion-icons/fa-solid/Adjust";
import { ThemeContext } from "../providers/themeProvider";

const Switch = styled("label")`
  display: flex;
  margin-right: auto;
  user-select: none;
`;

const StyledAdjust = styled(Adjust)`
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.switch};
  filter: drop-shadow(0px 4px 5px ${({ theme }) => theme.colors.switchShadow});
  :hover {
    opacity: 85%;
  }
`;

const Input = styled("input")`
  /* Hide default HTML checkbox */
  opacity: 0;
  width: 0;
  height: 0;
  cursor: pointer;
`;

export const ThemeSwitch = () => {
  const themeContext = useContext(ThemeContext);
  const isDarkThemeActive = themeContext.isDarkThemeActive;
  return useMemo(() => {
    return (
      <Switch id="switch">
        <Input
          id="slider"
          type="checkbox"
          onChange={themeContext.toggleActiveTheme}
          checked={themeContext.isDarkThemeActive}
        />
        <StyledAdjust />
      </Switch>
    );
  }, [isDarkThemeActive]);
};
