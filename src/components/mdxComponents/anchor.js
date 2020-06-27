import * as React from "react";
import styled from "@emotion/styled";

// Links with favicon
/*const AnchorTag = ({ children: link, ...props }) => {
  if (link) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <img
          src={'https://s2.googleusercontent.com/s2/favicons?domain=' + props.href}
          style={{ marginRight: '0.5rem' }}
        ></img>
        {link}
      </a>
    );
  } else {
    return null;
  }
};*/

const Anchor = styled("a")`
  text-decoration: none;
  color: ${(props) => props.theme.colors.link};
`;

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
