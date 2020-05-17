import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import DefaultLayout from '~/pages/_layouts/default';

import product from '~/assets/product.png';

import { Container } from './styles';

export default function Products() {
  return (
    <DefaultLayout>
      <Container>
        <div className="container">
          <div className="search">
            <input placeholder="Procurar..." />
            <FiSearch size={20} />
          </div>

          <div className="filters">
            <span>produtos</span>
            <span>serviços</span>
          </div>

          <ul>
            <li>
              <Link to="/details/1">
                <img src={product} alt="Produto" />
              </Link>
            </li>
            <li>
              <Link to="/details/1">
                <img src={product} alt="Produto" />
              </Link>
            </li>
            <li>
              <Link to="/details/1">
                <img src={product} alt="Produto" />
              </Link>
            </li>
            <li>
              <Link to="/details/1">
                <img src={product} alt="Produto" />
              </Link>
            </li>
            <li>
              <Link to="/details/1">
                <img src={product} alt="Produto" />
              </Link>
            </li>
            <li>
              <Link to="/details/1">
                <img src={product} alt="Produto" />
              </Link>
            </li>
            <li>
              <Link to="/details/1">
                <img src={product} alt="Produto" />
              </Link>
            </li>
            <li>
              <Link to="/details/1">
                <img src={product} alt="Produto" />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </DefaultLayout>
  );
}
