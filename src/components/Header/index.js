import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="Biscoitxs" />
        </Link>

        <ul>
          <li>
            <a href="#d">Home</a>
          </li>
          <li>
            <a href="#d">Produtos</a>
          </li>
          <li>
            <a href="#d">Serviços</a>
          </li>
          <li>
            <a href="#d">Produtores</a>
          </li>
          <li>
            <a href="#d">Quem somos</a>
          </li>
          <li>
            <a href="#d">Contato</a>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
