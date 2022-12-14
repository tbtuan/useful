import { useEffect } from "react";

export const usePreventScroll = (preventScrollRef) => {
  useEffect(() => {
    if (preventScrollRef.current) {
      document.getElementById("main-div").style.overflow = "hidden";
    } else {
      document.getElementById("main-div").style.overflow = "auto";
    }
  }, []);
};
