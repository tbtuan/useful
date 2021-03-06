import styled from "@emotion/styled";

export const StyledSwitch = styled("div")`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Switch = styled("label")`
  /* The switch - the box around the slider */
  position: relative;
  display: inline-block;
  width: 50px;
  height: 21px;
`;

export const Slider = styled("span")`
  /* The slider */
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.switchbg};
  //background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  :before {
    position: absolute;
    content: "";
    width: 15px;
    height: 15px;
    left: 4px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-color: ${(props) => props.theme.colors.switch};
  }
  /* Rounded sliders */
  border-radius: 34px;
  :before {
    border-radius: 50%;
  }
`;

export const Input = styled("input")`
  /* Hide default HTML checkbox */
  opacity: 0;
  width: 0;
  height: 0;
  /* The slider */
  :checked + ${Slider} {
    background-color: ${(props) => props.theme.colors.switchbg};
  }
  :checked + ${Slider}:before {
    -webkit-transform: translateX(27px);
    -ms-transform: translateX(27px);
    transform: translateX(27px);
    background-color: ${(props) => props.theme.colors.switch};
  }
`;
