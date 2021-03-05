import { Link } from "gatsby";
import { TableOfContents, TOCTitle, Li } from "./style";
import { useObserver } from "hooks/useObserver";

interface Item {
  title: string;
  url: string;
}

interface Props {
  tableOfContents: Item[];
}

const TableOfContentsLayout = ({ tableOfContents }: Props) => {
  let current = useObserver();

  if (
    typeof window === "undefined" ||
    !tableOfContents ||
    tableOfContents.length === 0
  ) {
    return null;
  }

  const toc = tableOfContents.map((item, index) => {
    return (
      <Li key={index} active={current.includes(item.url)}>
        <Link to={item.url}>{item.title}</Link>
      </Li>
    );
  });

  return (
    <TableOfContents>
      <TOCTitle>On this page</TOCTitle>
      {toc}
    </TableOfContents>
  );
};

export default TableOfContentsLayout;
