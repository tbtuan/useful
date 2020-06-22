import React from 'react';
import styled from '@emotion/styled';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';
import { Link, Paragraph } from 'emotion-icons/fa-solid';

const StyledLink = styled(Link)`
  width: 20px;
  height: 20px;
`;

const Pre = styled('pre')`
  padding: 0.5rem;
  z-index: 1;
  background: ${props => props.theme.colors.preFormattedText};
  border-radius: 1em;

  border-radius: 0.4rem;

  pre {
    background-color: ${props => props.theme.colors.preFormattedText} !important;
  }
`;

const Heading1 = styled('h1')`
  font-size: 32px;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: 16px;
  margin-top: 32px;
`;

const Heading2 = styled('h2')`
  font-size: 26px;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: 16px;
  /* Anchor link */
  padding-top: calc(6rem + 3rem);
  margin-top: calc(-6rem - 3rem + 26px);

  :hover a {
    opacity: 1;
  }

  a {
    position: absolute;
    margin-top: -3px;
    margin-left: calc(-20px - 0.5rem);
    padding-right: calc(0.5rem);
    opacity: 0;
  }
`;

const Heading3 = styled('h3')`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 16px;
  margin-top: 32px;
`;

const Heading4 = styled('h4')`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 16px;
  margin-top: 32px;
`;

const Heading5 = styled('h5')`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 16px;
  margin-top: 32px;
`;

const Heading6 = styled('h6')`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 16px;
  margin-top: 32px;
`;

const Table = styled('table')`
  padding: 0;
  border: solid 1px;
  border-color: ${props => props.theme.colors.tableHeader};
  border-spacing: 0;
  border-radius: 2px;
  border-spacing: 0;

  border-radius: 2px;

  tr {
    margin: 0;
    padding: 0;
  }

  tr th {
    font-weight: bold;
    font-size: 13px;
    background-color: ${props => props.theme.colors.tableHeader};
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  tr td {
    text-align: left;
    font-size: 13px;
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

const Ul = styled('ul')`
  padding: 0;
  margin: 0;
`;

const Li = styled('li')`
  list-style: none;
  padding: 0;
`;

const Kbd = styled('kbd')`
  display: inline-block;
  padding: 2px 5px;
  font: 11px Open Sans;
  font-weight: bold;
  color: #444d56;
  vertical-align: middle;
  background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-radius: 2px;
  box-shadow: inset 0 -1px 0 #d1d5da;
`;

const P = styled('p')`
  margin-top: 1rem;
  margin-bottom: 1rem !important;
  line-height: 1.625;
`;

const removeWhitespace = input => {
  return input.replace(/\s+/g, '').toLowerCase();
};

export default {
  h1: props => <Heading1 id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  h2: props => {
    const heading = props.children;

    return (
      <Heading2 id={removeWhitespace(heading)}>
        <a href={`#${removeWhitespace(heading)}`}>
          <StyledLink />
        </a>
        {heading}
      </Heading2>
    );
  },
  h3: props => <Heading3 id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  h4: props => <Heading4 id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  h5: props => <Heading5 id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  h6: props => <Heading6 id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  p: props => <P {...props} />,
  pre: props => <Pre {...props} />,
  code: CodeBlock,
  a: AnchorTag,
  table: props => <Table {...props} />,
  ul: props => <Ul {...props} />,
  li: props => <Li {...props} />,
  kbd: props => <Kbd {...props} />,

  // TODO add `blockquote`
};
