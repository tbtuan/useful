import React from 'react';
import config from '../../../config';
import Link from '../link';
import styled from '@emotion/styled';

const TreeNode = ({ className = '', url, title, items, ...rest }) => {
  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  return (
    <li className={calculatedClassName}>
      {title && <Link to={url}>{title}</Link>}

      {hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode key={item.url + index.toString()} {...item} />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
