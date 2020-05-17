import React from 'react';

import Header from '~/components/Header';
import Button from '~/components/Button';
import Footer from '~/components/Footer';

import teste from '~/assets/image-teste.jpg';
import app from '~/assets/app.png';

import { Banner, Products, App, ListApp, Number } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Banner>
        <div className="container">
          <div>
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

      <App>
        <div className="container">
          <h1>Baixe nosso app!</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>
          <p>The industry's standard dummy text ever since the 1500</p>

          <ListApp>
            <img src={app} alt="App Biscoitxs" />
            <div>
              <ul>
                <li>
                  <Number color="#FF6494" />
                  <div>
                    <strong>Lorem Ipsum is simply dummy?</strong>
                    <span>
                      The printing and typesetting industry. Lorem Ipsum has
                      been.
                    </span>
                  </div>
                </li>
                <li>
                  <Number color="#00CE98" />
                  <div>
                    <strong>Lorem Ipsum is simply dummy?</strong>
                    <span>
                      The printing and typesetting industry. Lorem Ipsum has
                      been.
                    </span>
                  </div>
                </li>
                <li>
                  <Number color="#747DFF" />
                  <div>
                    <strong>Lorem Ipsum is simply dummy?</strong>
                    <span>
                      The printing and typesetting industry. Lorem Ipsum has
                      been.
                    </span>
                  </div>
                </li>
              </ul>

              <button type="submit">baixe o app</button>
            </div>
          </ListApp>
        </div>
      </App>
      <Footer />
    </>
  );
}
