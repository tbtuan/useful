import styled from "@emotion/styled";

const Table = styled("table")`
  padding: 0;
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.tableHeader};
  border-spacing: 0;
  border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;
  margin-bottom: 1rem;
  width: 100%;

  tr {
    margin: 0;
    padding: 0;
  }

  tr th {
    font-weight: bold;
    font-size: 0.8rem;
    background-color: ${({ theme }) => theme.colors.tableHeader};
    text-align: left;
    margin: 0;
    padding: 0.5rem 1rem;
  }

  thead th {
    padding: 0.7rem 1rem;
  }

  tr td {
    text-align: left;
    font-size: 0.8rem;
    margin: 0;
    padding: 0.5rem 1rem;
  }

  tr th :first-of-type,
  tr td :first-of-type {
    margin-top: 0;
  }

  tr th :last-child,
  tr td :last-child {
    margin-bottom: 0;
  }

  tr:nth-of-type(2n) {
    padding: 5px;
    background-color: ${(props) => props.theme.colors.trSecondth};
  }
`;

export default Table;
