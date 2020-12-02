import React from "react";
import styled from "@emotion/styled";

import MasonryContainer from "./custom/masonry";

import CodeBlock from "./code";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./heading";
import Table from "./table";
import AnchorTag from "./anchor";
import FaLink from "../icons/faLink";
import Link from "../link";

const StyledLink = styled(FaLink)`
  width: 20px;
  height: 20px;
`;

const Pre = styled("pre")`
  padding: 0.5rem;
  z-index: 1;
  background: ${({ theme }) => theme.colors.preFormattedText};
  border-radius: 1em;

  border-radius: 0.4rem;
`;

const Ul = styled("ul")`
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const Li = styled("li")`
  list-style: none;
  padding: 0;
`;

const Kbd = styled("kbd")`
  display: inline-block;
  padding: 2px 5px;
  font: 11px Open Sans;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.kbdText};
  vertical-align: middle;
  background-color: ${({ theme }) => theme.colors.kbd};
  border: 1px solid ${({ theme }) => theme.colors.kbdBorder};
  border-radius: 2px;
  box-shadow: inset 0 -1px 0 ${({ theme }) => theme.colors.kbdBorder};
`;

const P = styled("p")`
  margin-top: 1rem;
  margin-bottom: 1rem !important;
  line-height: 1.625;
`;

const tocId = (input) => {
  return input
    .replace(/[\s+]/g, "-")
    .replace("/", "")
    .replace(".", "")
    .toLowerCase();
};

// <c></c> Merges ### Heading3 with the table below
const TableContainer = styled("div")`
  display: inline-block;
  width: 100%;

  h3 {
    font-weight: bold;
    font-size: 13px;
    background-color: ${({ theme }) => theme.colors.tableHeader};
    text-align: left;
    margin: 0;
    padding: 0.5rem 1rem;
  }

  thead {
    display: none;
  }
`;

const ColumnContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 20rem));
  grid-gap: 1rem;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(0, 20rem));
  }

  @media only screen and (max-width: 576px) {
    grid-template-columns: repeat(1, minmax(0, 20rem));
  }
`;

const SyntaxContainer = styled("div")`
  display: inline-block;
  width: 100%;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.preFormattedText} !important;
  padding: 0.5rem 0;
  padding-bottom: 0;
  margin-bottom: 1rem;

  h2 {
    font-weight: 600;
    font-size: 13px;
    color: #d2d2d2;
    text-align: left;
    margin: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.5rem;

    a {
      display: none;
    }
  }

  li {
    margin-bottom: 0;
  }

  h3 {
    color: #d2d2d2;
    font-size: 13px;
    font-weight: 500;
    padding-top: 0.5rem;
    padding-left: 1.5rem;
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right: 1.5rem;
  }

  a {
    font-size: 12px;
    padding-left: 1.5rem;
  }

  pre {
    margin-bottom: 0;
  }
`;

const Divider = styled("hr")`
  background-color: ${({ theme }) => theme.colors.text};
  margin-top: 2rem;
  margin-bottom 2rem;
`;

export default {
  h1: (props) => <Heading1 {...props} />,
  h2: (props) => {
    const heading = props.children;
    return (
      <Heading2 id={tocId(heading)}>
        <Link to={`#${tocId(heading)}`}>
          <StyledLink />
        </Link>
        {heading}
      </Heading2>
    );
  },
  h3: (props) => <Heading3 {...props} />,
  h4: (props) => <Heading4 {...props} />,
  h5: (props) => <Heading5 {...props} />,
  h6: (props) => <Heading6 {...props} />,
  p: (props) => {
    return <P {...props} />;
  },
  pre: (props) => <Pre {...props} />,
  code: CodeBlock,
  a: AnchorTag,
  table: (props) => <Table {...props} />,
  ul: (props) => <Ul {...props} />,
  li: (props) => <Li {...props} />,
  kbd: (props) => <Kbd {...props} />,
  hr: (props) => <Divider {...props} />,

  // Layer 1 Containers
  // MasonryContainer
  mc: (props) => <MasonryContainer {...props} />,
  // ColumnContainer
  cc: (props) => <ColumnContainer {...props} />,

  // Layer 2 Containers
  // TableContainer
  tc: (props) => <TableContainer {...props} />,
  // SyntaxContainer
  sc: (props) => <SyntaxContainer {...props} />,
  // TODO add `blockquote`
};
