import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Covid-19 | Mapa Lençóis Paulista</p>
        <ul>
          <li>Última atualização em 25/05/2020</li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
