import { useState, useEffect, createContext } from "react";
import { storeItem, getItemFromStorage } from "utils/localStorage";
interface Context {
  includeTags: (text: string) => void;
  excludeTags: (text: string) => void;
  filter: string[];
  storeVisited: (text: string, url: string) => void;
  visited: {
    text: string;
    url: string;
  }[];
  storePageVisited: (text: string, url: string) => void;
  pageVisited: {
    text: string;
    url: string;
  }[];
}

interface Props {
  children: React.ReactNode;
}

export const SiteContext: React.Context<Context> = createContext(null);

const SiteProvider = ({ children }: Props) => {
  if (typeof localStorage == "undefined") {
    return null;
  }
  const [filter, setFilter] = useState(getItemFromStorage("filter") || []);

  const [visited, setVisited] = useState(getItemFromStorage("visited") || []);

  const [pageVisited, setPageVisited] = useState(
    getItemFromStorage("page_visited") || []
  );

  useEffect(() => {
    storeItem("page_visited", pageVisited);
  }, [pageVisited]);

  useEffect(() => {
    storeItem("visited", visited);
  }, [visited]);

  useEffect(() => {
    storeItem("filter", filter);
  }, [filter]);

  const storeVisited = (text: string, url: string) => {
    setVisited((previousVisited) => {
      return [
        {
          text: text,
          url: url,
        },
        ...previousVisited?.filter((item) => item.url !== url)?.slice(0, 19),
      ];
    });
  };

  const storePageVisited = (text: string, url: string) => {
    const offset = url.indexOf("#");

    const fragment = url.substring(offset);

    setPageVisited((prevPageVisited) => {
      return [
        {
          text: offset !== -1 ? text + " (" + fragment + ")" : text,
          url: url,
        },
        ...prevPageVisited?.filter((item) => item.url !== url)?.slice(0, 19),
      ];
    });
  };

  const includeTags = (text: string) => {
    setFilter((prevFilter) => prevFilter.filter((tag) => tag !== text));
  };

  const excludeTags = (text: string) => {
    setFilter((prevFilter) => [...prevFilter, text]);
  };

  return (
    <SiteContext.Provider
      value={{
        storeVisited,
        storePageVisited,
        filter,
        includeTags,
        excludeTags,
        visited,
        pageVisited,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default SiteProvider;
