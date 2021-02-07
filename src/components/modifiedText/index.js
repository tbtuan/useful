import { StyledSmall, ClockIcon } from "./style";
import { dateToString } from "utils/date";

const ModifiedText = ({ modifiedTime }) => {
  return (
    <div>
      <ClockIcon />
      <StyledSmall>Last update: {dateToString(modifiedTime)}</StyledSmall>
    </div>
  );
};

export default ModifiedText;
