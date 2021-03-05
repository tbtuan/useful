import {
  StyledDiv,
  HeadingWrapper,
  StyledContainer,
  StyledHeading,
  TagContainer,
  Tag,
  TagList,
} from "./style";

interface Props {
  title: string;
  tags: string[];
  children: React.ReactNode;
}

const Card = ({ title, tags, children }: Props) => {
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
