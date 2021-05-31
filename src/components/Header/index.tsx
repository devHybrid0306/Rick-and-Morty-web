import React, { useState } from 'react';
import styled from 'styled-components';
import useMedia from 'use-media';

import LOGO from '../../assets/images/header_logo.png';

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

interface IHeaderProps {
  handleMenu: any;
}

const Header: React.FC<IHeaderProps> = ({ handleMenu }) => {
  const isMobile = useMedia({ maxWidth: 768 });
  const [isMenu, setIsMenu] = useState(true);

  return (
    <StyledHeader>
      {isMobile && (
        <LeftIcon
          onClick={() => {
            setIsMenu(!isMenu);
            handleMenu(!isMenu);
          }}
        >
          {isMenu ? '☰' : '✖'}
        </LeftIcon>
      )}
      <img src={LOGO} alt="Header Logo" />
    </StyledHeader>
  );
};

export default Header;
