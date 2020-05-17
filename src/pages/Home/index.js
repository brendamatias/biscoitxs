import React from 'react';

import Header from '~/components/Header';
import Button from '~/components/Button';

// import logoBlack from '~/assets/logo-black.png';
import teste from '~/assets/image-teste.jpg';

import { Banner, Products } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Banner>
        <div className="container">
          <div>
            {/* <img src={logoBlack} alt="Biscoitxs" /> */}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>

            <Button>saiba mais</Button>
          </div>
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
