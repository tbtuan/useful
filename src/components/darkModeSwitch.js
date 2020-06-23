import React from "react";
import styled from "@emotion/styled";

import { Adjust } from "emotion-icons/fa-solid";

const StyledAdjust = styled(Adjust)`
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  // rgba(59, 69, 78, 0.5)
  color: ${(props) => props.theme.colors.switch};
  filter: drop-shadow(
    0px 4px 5px ${(props) => props.theme.colors.switchShadow}
  );
`;

const StyledSwitch = styled("div")`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  //padding: 0 20px 0 25px;
`;

const Switch = styled("label")`
  /* The switch - the box around the slider */
  position: relative;
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
`;

const Slider = styled("span")`
  /* The slider */
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  //background-color: ${(props) => props.theme.colors.switchbg};
  //background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  // :before {
  //   position: absolute;
  //   content: '';
  //   width: 15px;
  //   height: 15px;
  //   left: 4px;
  //   bottom: 4px;
  //   top: 0;
  //   bottom: 0;
  //   margin: auto 0;
  //   -webkit-transition: 0.4s;
  //   transition: 0.4s;
  //   background-color: ${(props) => props.theme.colors.switch};
  // }

  // /* Rounded sliders */
  // border-radius: 34px;
  // :before {
  //   border-radius: 50%;
  // }
`;

const Input = styled("input")`
  /* Hide default HTML checkbox */
  opacity: 0;
  width: 0;
  height: 0;

  // /* The slider */
  // :checked + ${Slider} {
  //   background-color: ${(props) => props.theme.colors.switchbg};
  // }

  // :checked + ${Slider}:before {
  //   -webkit-transform: translateX(27px);
  //   -ms-transform: translateX(27px);
  //   transform: translateX(27px);
  //   background-color: ${(props) => props.theme.colors.switch};
  // }
`;

export const DarkModeSwitch = ({ isDarkThemeActive, toggleActiveTheme }) => (
  <StyledSwitch>
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
  </StyledSwitch>
);
