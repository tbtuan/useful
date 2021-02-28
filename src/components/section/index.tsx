import React, { useContext } from "react";
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

import { SiteContext } from "providers/siteContext";

interface Props {
  node: Node;
}

const Section = ({
  node: {
    frontmatter: { description, tags },
    fields: { slug, title, id },
    tableOfContents: { items },
  },
}: Props) => {
  const siteContext = useContext(SiteContext);

  const filtered =
    tags?.filter((tag) => siteContext.filter?.includes(tag)).length > 0 &&
    tags.length > 0;

  if (filtered) {
    return null;
  }
  return (
    <StyledDiv>
      <HeadingWrapper>
        <StyledHeading>{title}</StyledHeading>
        <p>{description}</p>
        <StyledLink to={slug} state={{ pageTitle: `${title}` }}>
          Read more
        </StyledLink>
      </HeadingWrapper>
      <StyledContainer>
        {items?.map((item, index) => (
          <Li key={item.url + index.toString()}>
            <StyledLink
              to={slug + item.url}
              state={{ pageTitle: `${item.title} (${title})` }}
            >
              {item.title}
            </StyledLink>
          </Li>
        ))}
      </StyledContainer>
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

export default Section;
