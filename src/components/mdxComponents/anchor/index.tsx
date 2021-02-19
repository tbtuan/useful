import React from "react";
import { StyledAnchor } from "./style";
import { getItemFromStorage, storeItem } from "utils/localStorage";

const AnchorTag = ({ children: url, ...props }) => {
  if (url) {
    const handleClick = () => {
      let visistedArr = getItemFromStorage("visited");

      if (!visistedArr) {
        visistedArr = [];
      }
      visistedArr = visistedArr
        .filter((item) => item.href !== props.href)
        .slice(0, 9);
      visistedArr.unshift({
        text: url,
        url: props.href,
        relevance: 0,
      });
      storeItem("visited", visistedArr);
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
