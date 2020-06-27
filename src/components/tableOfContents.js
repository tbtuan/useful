import React, { useState, useEffect } from "react";

import Link from "./link";

import styled from "@emotion/styled";

const Sidebar = styled("nav")`
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

  li {
    list-style-type: none;
  }

  li a {
    font-size: 13px;
    font-weight: 500;
    padding-left: 0;

    color: ${({ theme }) => theme.colors.text};
  }
`;

const TOCTitle = styled("li")`
  font-size: 0.8rem;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding-left: 0;
  margin: 0;

  color: ${({ theme }) => theme.colors.text};
`;

const StyledLi = styled("li")`
  list-style: none;
  margin: 0;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding-top: 1rem;
    display: block;
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.colors.link};
    }

    &.active {
      color: ${({ theme }) => theme.colors.link};
    }

    ${(props) =>
      props.active &&
      `
    color: #1ED3C6;
    border-color: ${({ theme }) => theme.colors.seperator};
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    background-color: #fff;
  `}
  }
`;

const ListItem = styled(({ ...props }) => {
  return (
    <StyledLi>
      <Link href={props.to} {...props}>
        {props.children}
      </Link>
    </StyledLi>
  );
})``;

const useActiveHash = () => {
  let [prev] = useState(null);

  useEffect(() => {
    const links = document.querySelectorAll("main div h2");

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        let tocLink = document.querySelector(
          `[href='#${entry.target.getAttribute("id")}']`
        );

        if (entry.isIntersecting) {
          tocLink.classList.add("active");
          if (prev != null && prev != tocLink) {
            prev.classList.remove("active");
          }
          prev = tocLink;
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "0% 0% -30% 0%",
    });

    links.forEach((item) => {
      observer.observe(item);
    });
  });
};

const TableOfContentsLayout = ({ tableOfContents }) => {
  useActiveHash();

  if (typeof window === "undefined" || !tableOfContents) {
    return null;
  }

  const toc = tableOfContents.items.map((item, index) => {
    return (
      <ListItem key={index} to={item.url}>
        {item.title}
      </ListItem>
    );
  });
  return (
    <Sidebar>
      <TOCTitle>On this page</TOCTitle>
      {toc}
    </Sidebar>
  );
};

export default TableOfContentsLayout;
