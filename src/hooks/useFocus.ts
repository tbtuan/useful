import { useEffect } from "react";

export const useFocus = (ref, handler) => {
  useEffect(() => {
    const handleKeyOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target) && e.key === "f") {
        handler();
      }
    };

    // Bind the event listener
    document.addEventListener("keyup", handleKeyOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("keyup", handleKeyOutside);
    };
  }, [ref]);
};
