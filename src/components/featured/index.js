import {
  StyledDiv,
  HeadingWrapper,
  StyledContainer,
  StyledHeading,
} from "./style";

const Featured = ({ title, children }) => {
  return (
    <StyledDiv>
      <HeadingWrapper>
        <StyledHeading>{title}</StyledHeading>
      </HeadingWrapper>
      <StyledContainer>{children}</StyledContainer>
    </StyledDiv>
  );
};

export default Featured;
