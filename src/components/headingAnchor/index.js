import { stringToSlug } from "utils/slugify";

import Link from "components/link";
import { Heading2 } from "../heading";
import { StyledLink } from "./style";

const HeadingAnchor = (props) => {
  const heading = props.children;

  return (
    <Heading2 id={stringToSlug(heading)}>
      <Link to={`#${stringToSlug(heading)}`}>
        <StyledLink />
      </Link>
      {heading}
    </Heading2>
  );
};

export default HeadingAnchor;
