import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Titulo = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Titulo>X MiniBlog</Titulo>
    </HeaderContainer>
  );
};

export default Header;
