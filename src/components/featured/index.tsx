import {
  StyledDiv,
  HeadingWrapper,
  StyledContainer,
  StyledHeading,
} from "./style";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Featured = ({ title, children }: Props) => {
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
