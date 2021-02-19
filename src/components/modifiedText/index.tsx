import React from "react";
import { StyledSmall, ClockIcon } from "./style";
import { dateToString } from "utils/date";

const ModifiedText = ({ modifiedTime }) => {
  return (
    <div>
      <ClockIcon />
      <StyledSmall>{dateToString(modifiedTime)}</StyledSmall>
    </div>
  );
};

export default ModifiedText;
