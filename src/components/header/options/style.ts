import styled from "@emotion/styled";

export const Container = styled("div")`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: auto;
  padding-right: 4.5rem;
  @media only screen and (max-width: 1023px) {
    padding-right: 3rem;
    width: 12.5rem;
  }

  @media only screen and (max-width: 576px) {
    display: none;
  }
`;
