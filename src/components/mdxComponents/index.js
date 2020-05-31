import React from 'react';
import styled from '@emotion/styled';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';

const StyledPre = styled('pre')`
  padding: 0.5rem;
  z-index: 1;
  background: ${props => props.theme.colors.preFormattedText};
  border-radius: 1em;
  border: 2px solid red;
  border-radius: 0.4rem;
`;

const removeWhitespace = input => {
  return input.replace(/\s+/g, '').toLowerCase();
};

export default {
  h1: props => {
    const heading = props.children;
    return (
      <div>
        <h1 className="heading1" id={removeWhitespace(heading)}>
          {heading}
          <a className="hash-link hidden" href={`#${removeWhitespace(heading)}`}>
            #
          </a>
        </h1>
      </div>
    );
  },
  h2: props => (
    <h2 className="heading2" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h3: props => (
    <h3 className="heading3" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h4: props => (
    <h4 className="heading4" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h5: props => (
    <h5 className="heading5" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h6: props => (
    <h6 className="heading6" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  p: props => <p className="paragraph" {...props} />,
  pre: props => <StyledPre {...props} />,
  code: CodeBlock,
  a: AnchorTag,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
