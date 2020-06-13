import * as React from 'react';

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

const AnchorTag = ({ children: link, ...props }) => {
  if (link) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    );
  } else {
    return null;
  }
};

export default AnchorTag;
