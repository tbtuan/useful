

import { tocId } from "utils/convertTocToId"

import Link from "components/link";
import { Heading2 } from "../heading"
import { StyledLink } from "./style"

const HeadingAnchor = (props) => {
    const heading = props.children;

    return (
        <Heading2 id={tocId(heading)}>
            <Link to={`#${tocId(heading)}`}>
                <StyledLink />
            </Link>
            {heading}
        </Heading2>
    );
}

export default HeadingAnchor;