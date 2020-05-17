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
              queres divulgação, capacitação e crescimento profissional?{' '}
              <strong>cola com a gente!</strong>
            </p>

            <Button>saiba mais</Button>
          </div>
        </div>
      </Banner>

      <Products>
        <div className="container">
          <h1>para você que quer comprar...</h1>

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
          <h1>para você que quer vender...</h1>

          <div>
            <img src={timeline} alt="Products" />
          </div>

          <Link to="/formations">
            <button type="submit">veja como se profissionalizar</button>
          </Link>
        </div>
      </Timeline>

      <App>
        <div className="container">
          <h1>baixe nosso app!</h1>

          <ListApp>
            <img src={app} alt="App Biscoitxs" />
            <div>
              <ul>
                <li>
                  <Circle color="#FF6494" />
                  <div>
                    <strong>
                      nada de pensar em desistir do negócio menine, vem com a
                      gente!
                    </strong>
                    <span>
                      um conjunto de cursos visando capacitação prática nas
                      áreas de empreendedorismo, marketing digital, controle de
                      finanças e muito mais.
                    </span>
                  </div>
                </li>
                <li>
                  <Circle color="#00CE98" />
                  <div>
                    <strong>bora botar essa cara no sol?</strong>
                    <span>
                      divulgue e empreenda com eficiência e segurança! nesta
                      plataforma você poderá cadastrar seus produtos/serviços
                      sem medo de ser quem é.
                    </span>
                  </div>
                </li>
                <li>
                  <Circle color="#747DFF" />
                  <div>
                    <strong>
                      só tu sabe tua força, vem empreender com a gente!
                    </strong>
                    <span>
                      cresça com a gente! vamos acompanhar o seu crescimento te
                      dando dicas para ser ainda mais independente e produtive.
                      nosso objetivo é te ver voar sozinhe.
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
