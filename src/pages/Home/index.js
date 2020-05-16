import React from 'react';

import Header from '~/components/Header';
import Button from '~/components/Button';

import logoBlack from '~/assets/logo-black.png';
import teste from '~/assets/image-teste.jpg';

import { Banner, Products } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Banner>
        <div>
          <img src={logoBlack} alt="Biscoitxs" />
          <h1>bom para você, bom para todxs.</h1>

          <Button>Vem cá e conheçe a gente</Button>
        </div>
      </Banner>

      <Products>
        <h1>Ei, aproveita as novidades!</h1>

        <ul>
          <li>
            <div>
              <img src={teste} alt="Biscoitxs" />
            </div>
          </li>
          <li>
            <div>
              <img src={teste} alt="Biscoitxs" />
            </div>
          </li>
          <li>
            <div>
              <img src={teste} alt="Biscoitxs" />
            </div>
          </li>
        </ul>
      </Products>
    </>
  );
}
