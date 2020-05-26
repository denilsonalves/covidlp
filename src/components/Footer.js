import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>
          &copy; {new Date().getFullYear()}, Criado por{' '}
          <a
            href="https://www.linkedin.com/in/denilson-alves"
            target="_blank"
            rel="noopener noreferrer"
          >
            Denilson Alves
          </a>{' '}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
