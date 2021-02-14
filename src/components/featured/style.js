import styled from "@emotion/styled";

export const StyledDiv = styled("div")`
  position: relative;
  height: 22.5rem;
  box-shadow: 0px 2px 2px #6f6f6f21, 0px 4px 4px #f777230d;
  background-color: ${({ theme }) => theme.colors.sidebar};
  border: 1px solid #d6d6d6b3;
  border-radius: 0.4rem;
`;

export const StyledContainer = styled("div")`
  margin-top: 2rem;
  margin-left: 2rem;
  overflow-y: auto;
  max-height: 13rem;
  margin-right: 1rem;
  column-count: 2;
  ::-webkit-scrollbar-track {
    background-color: #e6e6e6;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #c0c0c0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c0c0c0;
  }
`;

export const HeadingWrapper = styled("div")`
  border-bottom: 1px solid #d6d6d6;
  position: relative;
  margin: 0;
  height: 3.75rem;
`;

export const StyledHeading = styled("h4")`
  display: inline-block;
  margin-top: 3rem;
  margin-left: 1.5rem;
  background-color: ${({ theme }) => theme.colors.sidebar};
  padding: 0 0.5rem;
`;
