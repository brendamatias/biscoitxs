import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import Header from '~/components/HeaderPrimary';
import Footer from '~/components/Footer';

import product from '~/assets/product.png';

import { Container } from './styles';

export default function Products() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
