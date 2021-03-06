import styled from "@emotion/styled";

const SyntaxContainer = styled("div")`
  display: inline-block;
  width: 100%;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.preFormattedText} !important;
  padding: 0.5rem 0;
  padding-bottom: 0;
  margin-bottom: 1rem;

  h2 {
    font-weight: 600;
    font-size: 0.8rem;
    color: #e4e4e4;
    text-align: left;
    margin: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.5rem;

    a {
      display: none;
    }
  }

  li {
    margin-bottom: 0;
  }

  h3 {
    font-size: 0.8rem;
    color: #d2d2d2;
    font-weight: 500;
    padding-top: 0.5rem;
    padding-left: 1.5rem;
    margin-bottom: 0;
  }

  p {
    font-size: 0.8rem;
    margin-top: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right: 1.5rem;
  }

  a {
    font-size: 0.8rem;
    padding-left: 1.5rem;
  }

  pre {
    margin-bottom: 0;
    padding-top: 0;
  }
`;

export default SyntaxContainer;
