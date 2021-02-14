import React from "react";
import { Nav, BreadcrumbLink, AngleRightIcon } from "./style";

const Breadcrumb = ({ crumbs }) => {
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
