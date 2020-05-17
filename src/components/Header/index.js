import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-white.svg';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container className="container">
      <Content>
        <Link to="/">
          <img src={logo} alt="Biscoitxs" />
        </Link>

        <ul>
          <li>
            <a href="#d">Início</a>
          </li>
          <li>
            <a href="#d">Produtores</a>
          </li>
          <li>
            <a href="#d">FAQ</a>
          </li>
          <li>
            <button type="submit">acessar a loja</button>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
