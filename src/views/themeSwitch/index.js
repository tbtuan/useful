import React, { useContext, useMemo } from "react";
import { ThemeContext } from "providers/themeProvider";
import { Switch, StyledAdjust, Input } from "./style"

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
