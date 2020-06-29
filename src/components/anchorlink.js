import styled from "@emotion/styled";

const scrollToContent = (e, hash) => {
  e.preventDefault();
  const item2 = document.querySelector(hash).offsetTop;
  window.scrollTo({
    top: item2,
  });
  history.pushState("", document.title, window.location.pathname + hash);
};

const AnchorLink = styled(({ href, ...props }) => (
  <a href={href} onClick={(e) => scrollToContent(e, href)} {...props}>
    {props.children}
  </a>
))`
  text-decoration: none;
`;

export default AnchorLink;
