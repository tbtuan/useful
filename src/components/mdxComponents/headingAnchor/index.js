import { stringToSlug } from "utils/slugify";

import { Link } from "gatsby";
import { Heading2 } from "../heading";
import { StyledFaLink } from "./style";

const HeadingAnchor = (props) => {
  const heading = props.children;

  return (
    <Heading2 id={stringToSlug(heading)}>
      <Link aria-label={heading} to={`#${stringToSlug(heading)}`}>
        <StyledFaLink />
      </Link>
      {heading}
    </Heading2>
  );
};

export default HeadingAnchor;
