import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 0;
  background-color: rgba(30, 30, 30, 0.9);
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 300px;
  height: auto;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo 
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" 
        alt="Rick and Morty Logo" 
      />
    </HeaderContainer>
  );
}

export default Header;
