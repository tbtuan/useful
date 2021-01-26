import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { TableOfContents, TOCTitle, Li } from "./style";

const TableOfContentsLayout = ({ mdx }) => {
  const { tableOfContents } = mdx;

  // slug != "/" only => append /
  let slug =
    mdx.fields.slug && mdx.fields.slug.length != 1
      ? mdx.fields.slug + "/"
      : mdx.fields.slug;

  let [current, setCurrent] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll("main div h2");

    const handleObserver = (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          setCurrent(`${slug}#${entry.target.getAttribute("id")}`);
        });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: `0% 0% -80% 0%`,
    });

    links.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  if (typeof window === "undefined" || !tableOfContents) {
    return null;
  }

  const toc = tableOfContents.items.map((item, index) => {
    return (
      <Li key={index} active={current === slug + item.url}>
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
