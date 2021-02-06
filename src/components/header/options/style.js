import styled from "@emotion/styled";

export const OptionsWrapper = styled("div")`
  width: 100%;
  display: flex;
`;

export const Container = styled("div")`
  margin-left: auto;

  display: flex;
  gap: 1rem;
  align-items: center;
  padding-right: 4.5rem;

  @media only screen and (max-width: 1023px) {
    padding-right: 3rem;
    width: 12.5rem;
  }

  @media only screen and (max-width: 576px) {
    flex: none;
    width: auto;
    padding-right: 1.5rem;
  }
`;
