import React from "react";
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

import { getItemFromStorage, storeItem } from "utils/localStorage";
import { navigate } from "gatsby";

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
  const filter = getItemFromStorage("filter");

  const filtered =
    tags?.filter((tag) => filter?.includes(tag)).length > 0 && tags.length > 0;

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
        <TagContainer>
          <TagList>
            {tags?.map((tag) => (
              <Tag key={title && tag}>#{tag}</Tag>
            ))}
          </TagList>
        </TagContainer>
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
    </StyledDiv>
  );
};

export default Section;
