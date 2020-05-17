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
            <Link to="/">Início</Link>
          </li>
          <li>
            <a href="#d">Produtores</a>
          </li>
          <li>
            <Link to="/products">Produtos</Link>
          </li>

          <li>
            <div>
              <div>
                <Link to="/products">
                  <FiSearch size={20} />
                </Link>
              </div>
              <div>
                <Link to="/cart">
                  <FiShoppingCart size={20} />
                </Link>
              </div>
              <div>
                <Link to="/profile">
                  <FiUser size={20} />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
