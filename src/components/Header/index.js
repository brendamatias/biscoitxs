import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import logo from '~/assets/logo-white.svg';

import { Container, Content } from './styles';

export default function Header({ background }) {
  return (
    <Container background={background}>
      <Content className="container">
        <Link to="/">
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
            <a href="#d">FAQ</a>
          </li>
          <li>
            <Link to="/products">
              <button type="submit">acessar a loja</button>
            </Link>
          </li>
        </ul>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  background: PropTypes.string,
};

Header.defaultProps = {
  background: '',
};
