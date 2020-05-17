import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCookieBite,
} from 'react-icons/fa';

import DefaultLayout from '~/pages/_layouts/default';

import productImage from '~/assets/macrame.png';
import product from '~/assets/product.png';

import { Container, Top, Middle, Bottom } from './styles';

export default function Details() {
  return (
    <DefaultLayout>
      <Container>
        <div className="container">
          <Top>
            <img src={productImage} alt="Produto" />

            <div>
              <strong>macramê</strong>
              <p>
                <FaCookieBite color="#FFC107" size={20} />
                <FaCookieBite color="#FFC107" size={20} />
                <FaCookieBite color="#FFC107" size={20} />
                <FaCookieBite color="#FFC107" size={20} />
                <FaCookieBite color="#FFC107" size={20} />
              </p>

              <span>R$ 75,00</span>

              <h4>Quantidade</h4>
              <input />

              <button type="submit">adicionar ao carrinho</button>
            </div>
          </Top>

          <Middle>
            <div>
              <strong>descrição</strong>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>

            <div>
              <strong>pessoa vendedora</strong>

              <p>@ciclanobeltrano</p>
              <div>
                <FaFacebook color="#01C57D" />
                <FaTwitter color="#01C57D" />
                <FaInstagram color="#01C57D" />
              </div>

              <Link to="/profile/1">ver mais dados do vendedor</Link>
            </div>
          </Middle>

          <Bottom>
            <strong>mais anúncios da pessoa vendedora</strong>

            <div>
              <img src={product} alt="Product" />
              <img src={product} alt="Product" />
              <img src={product} alt="Product" />
              <img src={product} alt="Product" />
            </div>
          </Bottom>
        </div>
      </Container>
    </DefaultLayout>
  );
}
