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

const Card = ({ title, children, tags }) => {
  return (
    <StyledDiv>
      <HeadingWrapper>
        <StyledHeading>{title}</StyledHeading>
      </HeadingWrapper>
      <StyledContainer>{children}</StyledContainer>
      <TagContainer>
        <TagList>
          {tags?.map((tag) => (
            <Tag key={title && tag}>#{tag}</Tag>
          ))}
        </TagList>
      </TagContainer>
    </StyledDiv>
  );
};

export default Card;
