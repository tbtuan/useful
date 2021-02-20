import React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { TableOfContents, TOCTitle, Li } from "./style";

interface Item {
  title: string;
  url: string;
}

interface Props {
  tableOfContents: Item[];
}

const TableOfContentsLayout = ({ tableOfContents }: Props) => {
  let [current, setCurrent] = useState([]);

  useEffect(() => {
    const links = document.querySelectorAll("h2");

    const handleObserver = (entries) => {
      const elements = [];

      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          elements.push(`#${entry.target.getAttribute("id")}`);
        });
      if (elements.length > 0) {
        setCurrent(elements);
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: `0% 0% -80% 0%`,
    });

    links.forEach((item) => {
      observer.observe(item);
    });
  }, []);

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
