import React, { useContext } from "react";
import { ThemeContext } from "providers/themeContext";
import { Switch, AdjustIcon, Input } from "./style";

export const ThemeSwitch = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Switch id="switch">
      <Input
        id="slider"
        type="checkbox"
        onChange={themeContext.toggleActiveTheme}
        checked={themeContext.isDarkThemeActive}
      />
      <AdjustIcon />
    </Switch>
  );
};
