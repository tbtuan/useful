import MasonryContainer from "./container/masonry";
import ColumnContainer from "./container/column";
import SyntaxContainer from "./container/syntax";
import TableContainer from "./container/table";
import HeadingAnchor from "./headingAnchor";

import CodeBlock from "./code";
import {
  Heading1,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./heading";
import Paragraph from "./paragraph"
import ListItem from "./listitem"
import UnorderedList from "./unorderedList"
import Table from "./table";
import Keyboard from "./keyboard"
import AnchorTag from "./anchor";
import Divider from "./divider";
import Preformatted from "./preformatted"

export default {
  h1: (props) => <Heading1 {...props} />,
  h2: (props) => <HeadingAnchor {...props} />,
  h3: (props) => <Heading3 {...props} />,
  h4: (props) => <Heading4 {...props} />,
  h5: (props) => <Heading5 {...props} />,
  h6: (props) => <Heading6 {...props} />,
  p: (props) => {
    return <Paragraph {...props} />;
  },
  pre: (props) => <Preformatted {...props} />,
  code: CodeBlock,
  a: AnchorTag,
  table: (props) => <Table {...props} />,
  ul: (props) => <UnorderedList {...props} />,
  li: (props) => <ListItem {...props} />,
  kbd: (props) => <Keyboard {...props} />,
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
