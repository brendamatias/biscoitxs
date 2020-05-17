import React from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { IoIosRocket } from 'react-icons/io';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { Banner, Formation } from './styles';

export default function Formations() {
  return (
    <>
      <Header background="#01c57d" />
      <Banner>
        <div className="container">
          <div>
            <p>
              vem aprender sobre <strong>empreendedorismo</strong> e{' '}
              <strong>negócios digitais</strong>
            </p>

            <p className="width">
              empreender é lidar com incertezas e são necessárias algumas
              habilidades, vem descobrir com a gente
            </p>
          </div>
        </div>
      </Banner>

      <Formation>
        <div className="container">
          <h1>nossas trilhas...</h1>

          <div>
            <ul>
              <h2>
                <span>
                  <BsPlayFill size={20} />
                </span>
                inicie
              </h2>
              <li>
                <strong>1. iniciativa</strong>
                <span>colocando a ideia em prática</span>
              </li>
              <li>
                <strong>2. planejamento</strong>
                <span>como criar metas</span>
              </li>
              <li>
                <strong>3. autoconfiança</strong>
                <span>
                  confiando em suas opiniões e passando confiança asos cliente
                </span>
              </li>
              <li>
                <strong>4. perseverança</strong>
                <span>
                  perseverança para continuar e se destacar no mercado
                </span>
              </li>
            </ul>

            <ul>
              <h2>
                <span>
                  <MdWork size={20} />
                </span>
                aperfeiçoe
              </h2>
              <li>
                <strong>1. perfil empreendedor</strong>
                <span>conhecendo as características</span>
              </li>
              <li>
                <strong>2. necessidades</strong>
                <span>categorizando as reais necessidades do negócio</span>
              </li>
              <li>
                <strong>3. plano de negócio</strong>
                <span>o que é e como criar</span>
              </li>
            </ul>

            <ul>
              <h2>
                <span>
                  <IoIosRocket size={20} />
                </span>
                decole
              </h2>
              <li>
                <strong>1. micro, pequenos e médios negócios</strong>
                <span>onde estou e qual minha perspectiva de crescimento</span>
              </li>
              <li>
                <strong>2. constituição jurídica </strong>
                <span>
                  entendendo o que é e seus impactos dentro de um negócio
                </span>
              </li>
            </ul>
          </div>

          <h1>da vontade né?</h1>

          <button type="submit">acessar a formação</button>
        </div>
      </Formation>

      <Footer />
    </>
  );
}
