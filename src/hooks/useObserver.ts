import { useState, useEffect } from "react";

export const useObserver = () => {
  let [current, setCurrent] = useState([]);

  useEffect(() => {
    const links = document.querySelectorAll("h2");

    const handleObserver = (entries) => {
      const elements = [];

      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          elements.push(`#${entry.target.getAttribute("id")}`);
        });
      if (elements.length > 0) {
        setCurrent(elements);
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: `0% 0% -80% 0%`,
    });

    links.forEach((item) => {
      observer.observe(item);
    });
  }, []);
  return current;
};
