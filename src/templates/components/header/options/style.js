import styled from "@emotion/styled";
import Github from "icons/github";
import Edit from "icons/edit"
import Link from "components/link";

export const OptionsWrapper = styled("div")`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  display: flex;
`;

export const EditButton = styled(Link)`
  outline: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.background};
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.colors.editButton};
  border-radius: 0.5rem;
  padding: 0.5rem 1.25rem 0.5rem 1.25rem;
  filter: drop-shadow(
    0px 4px 5px ${({ theme }) => theme.colors.editButtonShadow}
  );
  user-select: none;
  :hover {
    opacity: 85%;
  }

`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  user-select: none;
  margin: 0;
  :hover {
    opacity: 85%;
  }
  display: flex;
  padding-right: 1rem;
`;

export const StyledGithub = styled(Github)`
  // width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.switch};
  filter: drop-shadow(0px 4px 5px ${({ theme }) => theme.colors.switchShadow});
  cursor: pointer;
  //user-select: none;
  margin: 0;
  :hover {
    opacity: 85%;
  }
`;

export const StyledEdit = styled(Edit)`
  width: 0.8rem;
  height: 0.6rem;
  margin-left: auto;
  margin-right: 0.2rem;
  color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled("div")`
  margin-left: auto;

  display: flex;
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