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
              <h1>patricia souza</h1>

              <strong>sobre</strong>
              <p>
                olá, meu nome é patrícia e eu tenho 23 anos. na comunidade lgbt+
                me identifico como mulher cis lesbica #amoraovale. estou muito
                feliz que vocês estejam vindo aqui olhar meu serviço como
                cabeleireira. inclusive, essa do meu lado é a amanda, minha
                esposa, gostaram do cabelo? adivinhem quem cortou? isso mesmo,
                sejam bem vindes.
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
            <strong>anúncios da pessoa vendedora</strong>

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
