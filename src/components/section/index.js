import {
  StyledDiv,
  HeadingWrapper,
  StyledContainer,
  StyledHeading,
  StyledLink,
  Li,
  TagContainer,
  Tag,
  TagList,
} from "./style";

const Section = ({
  node: {
    frontmatter: { description, tags },
    fields: { slug, title, id },
    tableOfContents: { items },
  },
}) => {
  return (
    <StyledDiv>
      <HeadingWrapper>
        <StyledHeading>{title}</StyledHeading>
        <p>{description}</p>
        <StyledLink to={slug}>Read more</StyledLink>
        <TagContainer>
          <TagList>
            {tags?.map((tag) => (
              <Tag key={title && tag}>#{tag}</Tag>
            ))}
          </TagList>
        </TagContainer>
      </HeadingWrapper>
      <StyledContainer>
        {items.map((item, index) => (
          <Li key={item.url + index.toString()}>
            <StyledLink to={slug + item.url}>{item.title}</StyledLink>
          </Li>
        ))}
      </StyledContainer>
    </StyledDiv>
  );
};

export default Section;
