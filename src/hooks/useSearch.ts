import { useEffect } from "react";
import Fuse from "fuse.js";

export const useSearch = (
  query: string,
  setResults: React.Dispatch<React.SetStateAction<any[]>>,
  [itemIndex, setItemIndex]
) => {
  useEffect(() => {
    if (globalThis.__FUSE__) {
      const fuse = new Fuse(globalThis.__FUSE__, {
        includeMatches: true,
        includeScore: true,
        threshold: 0.3,
        keys: ["id", "title", "url", "toc.title"],
      });

      const results = fuse.search(query, { limit: 5 });

      setResults(results);
      // To keep the selection inside the bounds while typing
      if (results && itemIndex > results.length - 1) {
        setItemIndex(0);
      }
    }
  }, [query]);
};
