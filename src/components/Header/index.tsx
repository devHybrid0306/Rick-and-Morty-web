import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useMedia from 'use-media';

import LOGO from '../../assets/images/header_logo.png';
import { paths } from '../../constants/paths';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;

  img {
    width: 300px;

    @media only screen and (max-width: 600px) {
      width: 200px;
    }
  }
`;

const LeftIcon = styled.p`
  font-size: 2em;
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  left: 10px;
`;

const Back = styled(Link)`
  font-size: 1em;
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  left: 10px;
`;
interface IHeaderProps {
  hasBack: boolean;
  hasMenu: boolean;
  handleMenu: any;
}

const Header: React.FC<IHeaderProps> = ({ hasBack, hasMenu, handleMenu }) => {
  const isMobile = useMedia({ maxWidth: 768 });
  const [isMenu, setIsMenu] = useState(true);

  return (
    <StyledHeader>
      {hasMenu && isMobile && (
        <LeftIcon
          onClick={() => {
            setIsMenu(!isMenu);
            handleMenu(!isMenu);
          }}
        >
          {isMenu ? '☰' : '✖'}
        </LeftIcon>
      )}
      {hasBack && <Back to={paths.main}>{isMobile ? '◄' : '◄ Back'}</Back>}
      <img src={LOGO} alt="Header Logo" />
    </StyledHeader>
  );
};

export default Header;
