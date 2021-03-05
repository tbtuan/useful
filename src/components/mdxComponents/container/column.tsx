import styled from "@emotion/styled";

const ColumnContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(
    ${({ col }) => col || `2`},
    minmax(0, calc(100% / ${({ col }) => col || `2`}))
  );
  grid-gap: 1rem;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(0, calc(100% / 2)));
  }

  @media only screen and (max-width: 576px) {
    grid-template-columns: repeat(1, minmax(0, 100%));
  }
`;

const Column = ({ children, col = 3, max = "20rem" }) => {
  return <ColumnContainer col={col}>{children}</ColumnContainer>;
};

export default Column;
