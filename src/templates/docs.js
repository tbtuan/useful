import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import ModifiedText from "./components/modifiedText";
import TableOfContents from "./components/tableOfContents";
import {
  StyledHeading,
  TitleWrapper,
  ContentWrapper,
  StyledMainWrapper,
} from "./style";

const DocsTemplate = ({ mdx }) => (
  <div>
    <TitleWrapper>
      <StyledHeading>{mdx.fields.title}</StyledHeading>
      <ModifiedText modifiedTime={mdx.frontmatter.date} />
    </TitleWrapper>
    <ContentWrapper>
      <TableOfContents mdx={mdx} />
      <StyledMainWrapper>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </StyledMainWrapper>
    </ContentWrapper>
  </div>
);

export default DocsTemplate;
