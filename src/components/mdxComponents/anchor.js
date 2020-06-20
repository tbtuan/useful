import * as React from 'react';
import styled from '@emotion/styled';

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

const A = styled('a')`
  text-decoration: none;
`;

const AnchorTag = ({ children: link, ...props }) => {
  if (link) {
    return (
      <A href={props.href} target="_blank" rel="noopener noreferrer">
        {link}
      </A>
    );
  } else {
    return null;
  }
};

export default AnchorTag;
