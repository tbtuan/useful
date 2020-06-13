import styled from '@emotion/styled';

export const SidebarWrapper = styled('div')`
  flex: 0 0 16rem;
  order: 2;
  margin-left: auto;
  margin-top: -4rem;
  background-color: ${props => props.theme.colors.background};
`;

export const Sidebar = styled('nav')`
  position: sticky;
  top: calc(2rem + 2.5rem + 3rem);
  max-height: calc(100vh - 4rem - 2.5rem - 3rem - 3rem);
  right: 0;
  margin-left: 3rem;
  overflow: auto;

  .rightSideTitle {
    font-size: 0.8rem;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    padding: 7px 24px 7px 16px;
    //border-left: 1px solid #e6ecf1;
    //border-left-color: rgb(230, 236, 241);
    //border-left-color: rgb(0, 0, 0);

    color: ${props => props.theme.colors.text};
  }

  .rightSideMod {
    margin-bottom: 2rem;
  }

  .rightSideEdit {
    font-size: 0.8rem;
    line-height: 1;
    font-weight: 500;
    letter-spacing: 1.2px;
    padding: 7px 24px 7px 16px;
    color: ${props => props.theme.colors.text};

    svg {
      margin-right: 0.5rem;
    }
  }

  li {
    list-style-type: none;
    //border-left: 1px solid #e6ecf1;
    //border-left-color: rgb(230, 236, 241);
  }

  li a {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 24px 7px 16px;

    color: ${props => props.theme.colors.text};
  }

  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

export const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props}>
        {props.children}
      </a>
    </li>
  );
})`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.colors.link};
    }

    &.active {
      color: ${({ theme }) => theme.colors.link};
    }

    ${props =>
      props.active &&
      `
      color: #1ED3C6;
      border-color: ${({ theme }) => theme.colors.seperator};
      //border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;
