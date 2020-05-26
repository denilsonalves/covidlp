import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <div>
          <p>Covid-19 | Mapa Lençóis Paulista</p>
          <ul>
            <li>Atualizado em em 25/05/2020</li>
          </ul>
        </div>
        <div>
          <p>
            Criado por{' '}
            <a
              href="https://www.linkedin.com/in/denilson-alves"
              target="_blank"
              rel="noopener noreferrer"
            >
              Denilson Alves
            </a>
          </p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
