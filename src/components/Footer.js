import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: rgba(30, 30, 30, 0.9);
  padding: 5px;
  text-align: center;
  color: white;
`;

class Header extends React.Component {
  render() {
    return (
      <FooterContainer>
        <p>Desenvolvido por Leticia Segurasse, Thiago Roncete, Miguel Dutra</p>
      </FooterContainer>
    );
  }
}

export default Header;
