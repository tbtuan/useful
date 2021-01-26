import { StyledAnchor } from "./style";

const AnchorTag = ({ children: url, ...props }) => {
  if (url) {
    return (
      <StyledAnchor href={props.href} target="_blank" rel="noopener noreferrer">
        {url}
      </StyledAnchor>
    );
  } else {
    return null;
  }
};

export default AnchorTag;
