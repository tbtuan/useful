import styled from "@emotion/styled";

const Keyboard = styled("kbd")`
  display: inline-block;
  padding: 2px 5px;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.kbdText};
  vertical-align: middle;
  background-color: ${({ theme }) => theme.colors.kbd};
  border: 1px solid ${({ theme }) => theme.colors.kbdBorder};
  border-radius: 2px;
  box-shadow: inset 0 -1px 0 ${({ theme }) => theme.colors.kbdBorder};
`;

export default Keyboard;
