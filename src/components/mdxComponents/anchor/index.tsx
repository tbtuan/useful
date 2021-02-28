import React, { useContext } from "react";
import { StyledAnchor } from "./style";
import { SiteContext } from "providers/siteContext";

const AnchorTag = ({ children: url, ...props }) => {
  const siteContext = useContext(SiteContext);
  if (url) {
    const handleClick = () => {
      siteContext.storeVisited(url, props.href);
    };

    return (
      <StyledAnchor
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {url}
      </StyledAnchor>
    );
  } else {
    return null;
  }
};

export default AnchorTag;
