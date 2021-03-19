import { useContext } from "react";
import { StyledAnchor } from "./style";
import { SiteContext } from "providers/siteContext";
import { navigate } from "gatsby";

const AnchorTag = ({ children: url, ...props }) => {
  const siteContext = useContext(SiteContext);

  if (url) {
    const handleClick = () => {
      siteContext.storeVisited(url, props.href);
    };

    const handlePageClick = () => {
      siteContext.storePageVisited(url, props.href);
      navigate(props.href);
    };

    return props.href.indexOf("http://") === 0 ||
      props.href.indexOf("https://") === 0 ? (
      <StyledAnchor
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {url}
      </StyledAnchor>
    ) : (
      <StyledAnchor onClick={handlePageClick}>{url}</StyledAnchor>
    );
  } else {
    return null;
  }
};

export default AnchorTag;
