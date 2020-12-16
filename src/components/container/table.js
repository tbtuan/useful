import styled from "@emotion/styled";

const TableContainer = styled("div")`
  display: inline-block;
  width: 100%;

  h3 {
    font-weight: bold;
    font-size: 13px;
    background-color: ${({ theme }) => theme.colors.tableHeader};
    text-align: left;
    margin: 0;
    padding: 0.5rem 1rem;
  }

  thead {
    display: none;
  }
`;

export default TableContainer;