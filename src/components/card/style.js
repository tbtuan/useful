import styled from "@emotion/styled";

export const StyledDiv = styled("div")`
  position: relative;
  height: 22.5rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.sidebar};
  border: 1px solid #d6d6d6b3;
  border-radius: 0.4rem;
  border-bottom: 0px;
  border-right: 0px;
`;

export const TagContainer = styled("div")`
  position: absolute;
  bottom: 0;
  border-top: 1px solid #d6d6d6;
  position: absolute;
  width: 100%;
  padding: 0.9rem 0 1.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const StyledTag = styled("small")`
  margin-left: 2rem;
`;

export const Tag = styled("span")`
  display: inline-block;
  font-size: 0.7rem;
  padding: 0.5rem;
  background-color: #ededed;
  border-radius: 1rem;
`;

export const TagList = styled("ol")`
  margin: 0;
  padding: 0rem;
  margin-left: 1.5rem;
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
