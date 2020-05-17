import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import Header from '~/components/Header';
import Button from '~/components/Button';
import Footer from '~/components/Footer';

import products from '~/assets/products.png';
import timeline from '~/assets/timeline.png';
import app from '~/assets/app.png';

import { Banner, Products, Timeline, App, ListApp, Circle } from './styles';

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
        <div className="container">
          <h1>Para você que quer comprar...</h1>

          <div>
            <FiArrowLeft size={30} />
            <img src={products} alt="Products" />
            <FiArrowRight size={30} />
          </div>

          <Link to="/products">
            <button type="submit">veja todos nossos produtos</button>
          </Link>
        </div>
      </Products>

      <Timeline>
        <div className="container">
          <h1>Para você que quer vender...</h1>

          <div>
            <img src={timeline} alt="Products" />
          </div>

          <button type="submit">veja como se profissionalizar</button>
        </div>
      </Timeline>

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
                  <Circle color="#FF6494" />
                  <div>
                    <strong>Lorem Ipsum is simply dummy?</strong>
                    <span>
                      The printing and typesetting industry. Lorem Ipsum has
                      been.
                    </span>
                  </div>
                </li>
                <li>
                  <Circle color="#00CE98" />
                  <div>
                    <strong>Lorem Ipsum is simply dummy?</strong>
                    <span>
                      The printing and typesetting industry. Lorem Ipsum has
                      been.
                    </span>
                  </div>
                </li>
                <li>
                  <Circle color="#747DFF" />
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
