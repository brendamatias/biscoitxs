import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCookieBite,
} from 'react-icons/fa';

import DefaultLayout from '~/pages/_layouts/default';

import provider from '~/assets/provider.png';
import product from '~/assets/product.png';

import { Container } from './styles';

export default function Provider() {
  return (
    <DefaultLayout>
      <Container>
        <div className="container">
          <div className="flex">
            <img src={provider} alt="Ciclano" />

            <div>
              <h1>Ciclano Beltrano</h1>

              <strong>sobre</strong>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>

              <div className="flex bottom">
                <div>
                  <strong>avaliações</strong>

                  <p>
                    <FaCookieBite color="#FFC107" size={30} />
                    <FaCookieBite color="#FFC107" size={30} />
                    <FaCookieBite color="#FFC107" size={30} />
                    <FaCookieBite color="#FFC107" size={30} />
                    <FaCookieBite color="#FFC107" size={30} />
                  </p>
                </div>
                <div>
                  <strong>redes sociais</strong>
                  <div>
                    <FaFacebook color="#01C57D" size={30} />
                    <FaTwitter color="#01C57D" size={30} />
                    <FaInstagram color="#01C57D" size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="products">
            <strong>anúncios do vendedore</strong>

            <div>
              <img src={product} alt="Product" />
              <img src={product} alt="Product" />
              <img src={product} alt="Product" />
              <img src={product} alt="Product" />
            </div>
          </div>
        </div>
      </Container>
    </DefaultLayout>
  );
}
