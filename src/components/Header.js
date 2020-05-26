import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Covid-19 | Lençóis Paulista</p>
        <ul>
          <li>Atualizado em em 25/05/2020</li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
