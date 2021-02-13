import "normalize.css";
import "theme/global.css";

export const onServiceWorkerUpdateReady = () => {
  window.location.reload();
};

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location && location.hash) {
    const anchorLink = document.querySelector(location.hash);
    anchorLink &&
      window.scrollTo({
        top: anchorLink.offsetTop,
      });
    return false;
  }
  return true;
};

export const onClientEntry = (
  _,
  { filename = "searchIndex.json", fetchOptions = {} }
) => {
  window.__FUSE__ = window.__FUSE__ || {};
  window.__FUSE__.__loaded = fetch(
    `${__PATH_PREFIX__}/${filename}`,
    fetchOptions
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (fullIndex) {
      window.__FUSE__ = fullIndex;
      return window.__FUSE__;
    })
    .catch((e) => {
      console.log("Failed fetch search index");
      throw e;
    });
};
