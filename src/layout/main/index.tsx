import React from 'react';
import styled from 'styled-components';

import { Header } from '../../components';

const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: black;
`;

interface IMainLayout {
  children: JSX.Element;
}
const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const handleMenu = (isMenuValue: boolean) => {
    console.log('->MainLayout.IsMenu', isMenuValue);
  };

  return (
    <MainLayoutWrapper>
      <Header handleMenu={handleMenu} />
      {children}
    </MainLayoutWrapper>
  );
};

export default MainLayout;
