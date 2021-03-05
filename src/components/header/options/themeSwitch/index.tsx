import { useContext } from "react";
import { ThemeContext } from "providers/themeContext";
import { Switch, StyledSwitch, Slider, Input } from "./style";

export const ThemeSwitch = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledSwitch>
      <Switch id="switch">
        <Input
          id="slider"
          type="checkbox"
          onChange={themeContext.toggleActiveTheme}
          checked={themeContext.isDarkThemeActive ? false : true}
        />
        <Slider />
      </Switch>
    </StyledSwitch>
  );
};
