import React from 'react';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content } from './styles';

export default function HeaderPrimary() {
  return (
    <Container>
      <Content className="container">
        <Link to="/products">
          <img src={logo} alt="Biscoitxs" />
        </Link>

        <ul>
          <li>
            <Link to="/products">Início</Link>
          </li>
          <li>
            <a href="#d">Produtores</a>
          </li>
          <li>
            <a href="#d">Produtos</a>
          </li>

          <li>
            <div>
              <div>
                <FiSearch size={20} />
              </div>
              <div>
                <FiShoppingCart size={20} />
              </div>
              <div>
                <FiUser size={20} />
              </div>
            </div>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
