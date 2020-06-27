import React from "react";
import styled from "@emotion/styled";

import { Adjust } from "emotion-icons/fa-solid";

const StyledAdjust = styled(Adjust)`
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.switch};
  filter: drop-shadow(0px 4px 5px ${({ theme }) => theme.colors.switchShadow});
`;

const Switch = styled("label")`
  /* The switch - the box around the slider */
  position: relative;
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
`;

const Slider = styled("span")`
  cursor: pointer;
`;

const Input = styled("input")`
  /* Hide default HTML checkbox */
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ThemeSwitch = React.memo(
  ({ isDarkThemeActive, toggleActiveTheme }) => {
    return (
      <Switch id="switch">
        <Input
          id="slider"
          type="checkbox"
          onChange={toggleActiveTheme}
          checked={isDarkThemeActive ? false : true}
        />
        <Slider />
        <StyledAdjust />
      </Switch>
    );
  },
  (prev, next) => prev.isDarkThemeActive === next.isDarkThemeActive
);
