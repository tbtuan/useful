import styled from "@emotion/styled";

const ColumnContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 20rem));
  grid-gap: 1rem;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(0, 20rem));
  }

  @media only screen and (max-width: 576px) {
    grid-template-columns: repeat(1, minmax(0, 20rem));
  }
`;

const Column = (props) => {
  const children = props.children;

  return (
    <ColumnContainer>
      { children.map((child) => <div>{child}</div>) }
    </ColumnContainer>
  );
}

export default Column;