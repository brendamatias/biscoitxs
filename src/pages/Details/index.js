import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import { TiStarFullOutline } from 'react-icons/ti';

import Header from '~/components/HeaderPrimary';
import Footer from '~/components/Footer';

import productImage from '~/assets/macrame.png';
import product from '~/assets/product.png';

import { Container, Top, Middle, Bottom } from './styles';

export default function Details() {
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <Top>
            <img src={productImage} alt="Produto" />

            <div>
              <strong>Macramê</strong>
              <p>
                <TiStarFullOutline color="#FFC107" size={20} />
                <TiStarFullOutline color="#FFC107" size={20} />
                <TiStarFullOutline color="#FFC107" size={20} />
                <TiStarFullOutline color="#FFC107" size={20} />
                <TiStarFullOutline color="#FFC107" size={20} />
              </p>

              <span>R$ 75,00</span>

              <h4>Quantidade</h4>
              <input />

              <button type="submit">adicionar ao carrinho</button>
            </div>
          </Top>

          <Middle>
            <div>
              <strong>Descrição</strong>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>

            <div>
              <strong>Vendedxr</strong>

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
            <strong>Mais anúncios do vendedxr</strong>

            <div>
              <img src={product} alt="Product" />
              <img src={product} alt="Product" />
              <img src={product} alt="Product" />
              <img src={product} alt="Product" />
            </div>
          </Bottom>
        </div>
      </Container>
      <Footer />
    </>
  );
}
