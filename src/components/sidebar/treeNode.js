import React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';
import styled from '@emotion/styled';

const Collapser = styled('button')``;

let currentLayer = 0;

const TreeNode = styled(
  ({ className = '', setCollapsed, collapsed, layer, url, title, items, ...rest }) => {
    const isCollapsed = collapsed[url];

    const collapse = () => {
      setCollapsed(url);
    };

    if (layer === 2) {
      return null;
    }

    const hasChildren = items.length !== 0;

    let location;

    if (typeof document != 'undefined') {
      location = document.location;
    }
    const active =
      location &&
      (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

    const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

    return (
      <li className={calculatedClassName}>
        {title && <Link to={url}>{title}</Link>}

        {!isCollapsed && hasChildren ? (
          <ul>
            {items.map((item, index) => (
              <TreeNode
                key={item.url + index.toString()}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
                layer={currentLayer + 1}
                {...item}
              />
            ))}
          </ul>
        ) : null}
      </li>
    );
  }
)`
  .collapser {
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 20px;
    z-index: 1;
    cursor: pointer;
  }
`;

export default TreeNode;
