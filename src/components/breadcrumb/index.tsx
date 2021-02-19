import React from "react";
import { Nav, BreadcrumbLink, AngleRightIcon } from "./style";

interface Crumb {
  slug: string;
  title: string;
}

interface Props {
  crumbs: Crumb[];
}

const Breadcrumb = ({ crumbs }: Props) => {
  return (
    <Nav>
      {crumbs.map((item, index) => (
        <span key={index}>
          {index != 0 && <AngleRightIcon />}
          <BreadcrumbLink to={item.slug}>{item.title}</BreadcrumbLink>
        </span>
      ))}
    </Nav>
  );
};

export default Breadcrumb;
