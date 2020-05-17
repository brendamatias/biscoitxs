import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content } from './styles';

export default function HeaderPrimary() {
  return (
    <Container>
      <Content className="container">
        <Link to="/products ">
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
            <a href="#d">Produtos</a>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
