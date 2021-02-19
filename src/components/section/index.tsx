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
  const handleClick = (text, href) => {
    let visistedArr = getItemFromStorage("page_visited");

    if (!visistedArr) {
      visistedArr = [];
    }
    visistedArr = visistedArr
      ?.filter((item) => item.href !== href)
      ?.slice(0, 9);
    visistedArr.unshift({
      text: text,
      url: href,
      relevance: 0,
    });
    storeItem("page_visited", visistedArr);
  };

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
        <StyledLink
          onClick={() => {
            handleClick(title, slug);
            navigate(slug);
          }}
        >
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
              href={slug + item.url}
              onClick={() => {
                handleClick(item.title + " (" + title + ")", slug + item.url);
                navigate(slug + item.url);
              }}
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
