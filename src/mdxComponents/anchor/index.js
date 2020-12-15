import * as React from "react";
import { Anchor } from "./style"

const AnchorTag = ({ children: link, ...props }) => {
  if (link) {
    return (
      <Anchor href={props.href} target="_blank" rel="noopener noreferrer">
        {link}
      </Anchor>
    );
  } else {
    return null;
  }
};

export default AnchorTag;
