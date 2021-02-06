import { StyledSmall, ClockIcon } from "./style";

const ModifiedText = ({ modifiedTime }) => {
  const modifiedDate = new Date(Date.parse(modifiedTime)).toLocaleDateString();

  return (
    <div>
      <ClockIcon />
      <StyledSmall>Last update: {modifiedDate}</StyledSmall>
    </div>
  );
};

export default ModifiedText;
