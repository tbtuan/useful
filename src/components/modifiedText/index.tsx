import { StyledSmall, ClockIcon } from "./style";
import { zuluDateToString } from "utils/date";

const ModifiedText = ({ modifiedTime }) => {
  return (
    <div>
      <ClockIcon />
      <StyledSmall>{zuluDateToString(modifiedTime)}</StyledSmall>
    </div>
  );
};

export default ModifiedText;
