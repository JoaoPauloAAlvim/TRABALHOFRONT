import React from 'react';
import styled from 'styled-components';

const HeaderCaixa = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const HeaderGif = styled.img`
  max-width: 200px;
  height: auto;
`;

const Header = () => {
  const gifUrl = 'https://i.imgur.com/kN4dnTw.gif';

  return (
    <HeaderCaixa>
      <HeaderGif src={gifUrl} alt="Logo" />
    </HeaderCaixa>
  );
};

export default Header;
