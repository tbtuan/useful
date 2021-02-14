import {
  StyledDiv,
  HeadingWrapper,
  StyledContainer,
  StyledHeading,
  TagContainer,
  Tag,
  TagList,
} from "./style";

const Card = ({ title, tags, children }) => {
  return (
    <StyledDiv>
      <HeadingWrapper>
        <StyledHeading>{title}</StyledHeading>
        <StyledContainer>{children}</StyledContainer>
        <TagContainer>
          <TagList>
            {tags?.map((tag) => (
              <Tag key={title && tag}>#{tag}</Tag>
            ))}
          </TagList>
        </TagContainer>
      </HeadingWrapper>
    </StyledDiv>
  );
};

export default Card;
