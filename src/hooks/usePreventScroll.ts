import { useEffect } from "react";

export const usePreventScroll = (preventScrollRef) => {
  useEffect(() => {
    const preventScrolling = (e) => {
      if (preventScrollRef.current) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventScrolling, {
      passive: false,
    });
    return () => document.removeEventListener("touchmove", preventScrolling);
  }, []);
};
