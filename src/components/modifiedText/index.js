import Icon from "../icons";
import Clock from "../icons/clock";
import { StyledSmall } from "./style"

const ModifiedText = ({ modifiedTime }) => {
  const modifiedDate = new Date(Date.parse(modifiedTime)).toLocaleDateString();

  return (
    <div>
      {<Icon tag={Clock} size="10px" gap="0.5rem" />}
      <StyledSmall>Last update: {modifiedDate}</StyledSmall>
    </div>
  );
};

export default ModifiedText;
