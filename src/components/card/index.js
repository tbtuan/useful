import {
  StyledDiv,
  HeadingWrapper,
  StyledContainer,
  StyledHeading,
  TagContainer,
  StyledTag,
  Tag,
  TagList,
} from "./style";

const Card = ({ title, children }) => {
  return (
    <StyledDiv>
      <HeadingWrapper>
        <StyledHeading>{title}</StyledHeading>
      </HeadingWrapper>
      <StyledContainer>{children}</StyledContainer>
      <TagContainer>
        <StyledTag>Tags</StyledTag>
        <TagList>
          <Tag>Web development</Tag>
        </TagList>
      </TagContainer>
    </StyledDiv>
  );
};

export default Card;
