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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
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
