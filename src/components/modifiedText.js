import styled from "@emotion/styled";
import { Clock } from "emotion-icons/fa-solid";
import Icon from "./icon";

const StyledSmall = styled("small")`
  color: ${({ theme }) => theme.colors.text};
`;

const ModifiedText = ({ modifiedTime }) => {
  const modifiedDate = new Date(Date.parse(modifiedTime)).toLocaleDateString();
  return (
    <div>
      <Icon tag={Clock} size="12px" gap="0.5rem" />
      <StyledSmall>Last update: {modifiedDate}</StyledSmall>
    </div>
  );
};

export default ModifiedText;
