import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import logo from '~/assets/logo.svg';

import { Container, Bottom } from './styles';

export default function Footer() {
  return (
    <>
      <Container>
        <div className="container">
          <ul>
            <li>
              <img src={logo} alt="Biscoitxs" />
            </li>
            <li>
              <strong>sobre nós</strong>
              <p>
                olá a todes! somos 4 mulheres participantes do #ficaemcasahack,
                que juntas pensamos em como desenvolver uma ideia de market
                place para divulgação, capacitação e crescimento profissional da
                comunidade lgbtqia+. sejam todes bem vindes pois essa casa é
                nossa.
              </p>
            </li>
            <li>
              <strong>follow</strong>
              <div>
                <FaFacebook size={30} />
                <FaTwitter size={30} />
                <FaInstagram size={30} />
              </div>
            </li>
          </ul>
        </div>
      </Container>
      <Bottom>
        <div className="container">
          <p>
            © 2020 Biscoitxs - Todos os direitos reservados. Feito com
            <span>♥</span> em Recife
          </p>
        </div>
      </Bottom>
    </>
  );
}
