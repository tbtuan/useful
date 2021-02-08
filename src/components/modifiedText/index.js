import { StyledSmall, ClockIcon } from "./style";
import { dateToString } from "utils/date";

const ModifiedText = ({ modifiedTime, text = "Last update: " }) => {
  return (
    <div>
      <ClockIcon />
      <StyledSmall>{text + dateToString(modifiedTime)}</StyledSmall>
    </div>
  );
};

export default ModifiedText;
