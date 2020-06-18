import React from 'react';
import styled from '@emotion/styled';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';
import { Link } from 'emotion-icons/fa-solid';

const StyledPre = styled('pre')`
  padding: 0.5rem;
  z-index: 1;
  background: ${props => props.theme.colors.preFormattedText};
  border-radius: 1em;
  border: 2px solid red;
  border-radius: 0.4rem;

  pre {
    background-color: ${props => props.theme.colors.preFormattedText} !important;
  }
`;

const Heading2 = styled('h2')`
  font-size: 26px;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: 16px;
  /* Anchor link */
  padding-top: 5rem;
  margin-top: calc(-4rem + 32px);

  a {
    position: absolute;
    margin-left: -1.25rem;
  }
`;

const Table = styled('table')`
  padding: 0;
  border-style: none;
  border-spacing: 0;

  tr {
    margin: 0;
    padding: 0;
  }

  tr th {
    font-weight: bold;
    background-color: ${props => props.theme.colors.tableHeader};
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  tr td {
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  tr th :first-of-type,
  tr td :first-of-type {
    margin-top: 0;
  }

  tr th :last-child,
  tr td :last-child {
    margin-bottom: 0;
  }

  tr:nth-of-type(2n) {
    padding: 5px;
    background-color: ${props => props.theme.colors.trSecondth};
  }
`;

const removeWhitespace = input => {
  return input.replace(/\s+/g, '').toLowerCase();
};

export default {
  h1: props => (
    <h1 className="heading1" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h2: props => {
    const heading = props.children;

    return (
      <Heading2 id={removeWhitespace(heading)}>
        <a href={`#${removeWhitespace(heading)}`}>#{/* <Link /> */}</a> {heading}
      </Heading2>
    );
  },
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
  table: props => {
    return <Table {...props} />;
  },
  /*ul: props => {
    const unorderedlist = props.children;
    return <ul style={{ padding: '0' }}>{unorderedlist}</ul>;
  },

  li: props => {
    const listitem = props.children;
    return <li style={{ listStyle: 'none' }}>{listitem}</li>;
  },*/

  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
