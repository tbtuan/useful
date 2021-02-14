import {
  StyledDiv,
  HeadingWrapper,
  StyledContainer,
  StyledHeading,
  StyledLink,
  Li,
} from "./style";

const Section = ({
  node: {
    frontmatter: { description },
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
