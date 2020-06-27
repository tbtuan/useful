import React from "react";
import styled from "@emotion/styled";

import Adjust from "emotion-icons/fa-solid/Adjust";

const StyledAdjust = styled(Adjust)`
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.switch};
  filter: drop-shadow(0px 4px 5px ${({ theme }) => theme.colors.switchShadow});
`;

const Input = styled("input")`
  /* Hide default HTML checkbox */
  opacity: 0;
  width: 0;
  height: 0;
  cursor: pointer;
`;

export const ThemeSwitch = React.memo(
  ({ isDarkThemeActive, toggleActiveTheme }) => {
    return (
      <label id="switch">
        <Input
          id="slider"
          type="checkbox"
          onChange={toggleActiveTheme}
          checked={isDarkThemeActive ? false : true}
        />
        <StyledAdjust />
      </label>
    );
  },
  (prev, next) => prev.isDarkThemeActive === next.isDarkThemeActive
);
