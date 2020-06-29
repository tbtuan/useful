import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

// Based on https://janosh.dev/blog/react-hooks-masonry

function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores handler
  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      const isSupported = element && element.addEventListener;

      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);

      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}

const MasonryDiv = styled("div")`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${(props) => props.gap || `1rem`};
`;

const Col = styled("div")`
  display: flex;
  flex-direction: column;
  min-inline-size: -webkit-fill-available;
`;

const fillCols = (children, cols) => {
  children.forEach((child, i) => cols[i % cols.length].push(child));
};

// TODO Masonry works only for at least 2 <c> </c> inside <r> </r>
// Fix later
export default function Masonry({ children, gap, minWidth = 500, ...rest }) {
  const ref = useRef();

  const [numCols, setNumCols] = useState(
    Math.ceil(
      (document.documentElement.clientWidth - 14 * 16 - 18 * 16) / minWidth
    )
  );

  const cols = [...Array(numCols)].map(() => []);

  fillCols(children, cols);

  const resizeHandler = () => {
    setNumCols(Math.ceil(ref.current.offsetWidth / minWidth));
  };

  useEffect(resizeHandler, []);
  useEventListener(`resize`, resizeHandler);

  return (
    <MasonryDiv ref={ref} gap={gap} {...rest}>
      {[...Array(numCols)].map((_, index) => (
        <Col key={index} gap={gap}>
          {cols[index]}
        </Col>
      ))}
    </MasonryDiv>
  );
}
