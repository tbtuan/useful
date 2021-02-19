import styled from "@emotion/styled";

const TableContainer = styled("div")`
  display: inline-block;
  width: 100%;

  h3 {
    font-weight: bold;
    font-size: 0.8rem;
    background-color: ${({ theme }) => theme.colors.tableHeader};
    text-align: left;
    margin: 0;
    padding: 0.7rem 1rem;
    border-radius: 0.4rem 0.4rem 0 0;
  }

  table {
    border-radius: 0 0 0.4rem 0.4rem;
  }

  thead {
    display: none;
  }
`;

export default TableContainer;
