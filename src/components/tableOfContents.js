import React, { useState, useEffect } from "react";

import Link from "./link";

import styled from "@emotion/styled";

const TableOfContents = styled("nav")`
  max-width: 18rem;
  position: fixed;
  top: calc(8rem);
  left: calc(100% - 14rem);
  max-height: calc(100vh - 4rem - 2.5rem - 3rem - 3rem);
  overflow: auto;
  overflow-x: hidden;
  padding-bottom: 2rem;
  order: 2;

  @media only screen and (max-width: 1023px) {
    max-width: 18rem;
    position: static;
    overflow: auto;
    order: 1;
  }
`;

const TOCTitle = styled("li")`
  list-style-type: none;
  font-size: 0.8rem;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding-left: 0;
  margin: 0;

  color: ${({ theme }) => theme.colors.text};
`;

const Li = styled("li")`
  list-style: none;
  margin: 0;

  a {
    font-size: 13px;
    padding-left: 0;
    text-decoration: none;
    font-weight: 400;
    padding-top: 1rem;
    display: block;
    position: relative;

    color: ${(props) =>
    props.active ? props.theme.colors.link : props.theme.colors.text};

    &:hover {
      color: ${({ theme }) => theme.colors.link};
    }
  }
`;

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
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrent(`${slug}#${entry.target.getAttribute("id")}`);
        }
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
