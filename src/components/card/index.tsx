import { useState, useRef } from "react";

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
  const tagsRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <StyledDiv>
      <HeadingWrapper>
        <StyledHeading>{title}</StyledHeading>
        <StyledContainer>{children}</StyledContainer>
        <TagContainer show={showMore}>
          <TagList show={showMore} ref={tagsRef}>
            {tags?.map((tag) => (
              <Tag key={title && tag} onClick={handleShowMore}>
                #{tag}
              </Tag>
            ))}
          </TagList>
        </TagContainer>
      </HeadingWrapper>
    </StyledDiv>
  );
};

export default Card;
