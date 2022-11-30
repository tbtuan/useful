/* Root */

interface Data {
  site?: Site;
  allMdx?: AllMdx;
  mdx?: Mdx;
  children?: string;
}

/* Site specific */

interface Site {
  siteMetadata?: SiteMetadata;
}

interface SiteMetadata {
  docsLocation?: string;
  githubUrl?: string;
}

/* All mdx files */

interface AllMdx {
  edges?: Edges[];
}

interface Edges {
  node?: Node;
}

interface Node {
  fields?: Fields;
  body?: string;
  tableOfContents?: Items;
  parent?: Parent;
  frontmatter?: Frontmatter;
}

/* Current mdx file */

interface Mdx {
  fields?: Fields;
  //children?: string;
  headings?: Value[];
  tableOfContents?: Items;
  parent?: Parent;
  frontmatter?: Frontmatter;
}

interface Value {
  value: string;
  depth: Number;
}
interface Items {
  items?: Item[];
}

interface Item {
  title?: string;
  url?: string;
}

interface Fields {
  id?: string;
  title?: string;
  slug?: string;
}

interface Parent {
  relativePath?: string;
}

/* Mdx specific content */

interface Frontmatter {
  title?: string;
  description?: string;
  date?: Date;
  tags?: string[];
}
