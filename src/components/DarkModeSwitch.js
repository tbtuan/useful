import React from 'react';
import styled from '@emotion/styled';

import NightImage from './images/night.png';
import DayImage from './images/day.png';

const StyledSwitch = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  //padding: 0 20px 0 25px;

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 21px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.switchbg};
    //background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    left: 4px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    //box-shadow: 0 0px 15px #2020203d;
    background-color: ${props => props.theme.colors.switch};
    //background-color: #DECCC0;
    /*background: white url(${NightImage});
    background-repeat: no-repeat;
    background-position: center;*/
  }

  input:checked + .slider {
    background-color: ${props => props.theme.colors.switchbg};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(27px);
    -ms-transform: translateX(27px);
    transform: translateX(27px);
    background-color: ${props => props.theme.colors.switch};
    //background-color: #716a63;
    //background-color: #ef9b44;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const DarkModeSwitch = ({ isDarkThemeActive, toggleActiveTheme }) => (
  <StyledSwitch>
    <label id="switch" className="switch">
      <input
        type="checkbox"
        id="slider"
        onChange={toggleActiveTheme}
        checked={isDarkThemeActive ? false : true}
      />
      <span className="slider round"></span>
    </label>
  </StyledSwitch>
);
