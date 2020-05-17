import React from 'react';

import { Container, Products, Order } from './styles';

import product from '~/assets/product-macrame.png';

import Header from '~/components/HeaderPrimary';
import Footer from '~/components/Footer';

export default function Cart() {
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div>
            <h1>Meu carrinho</h1>
            <Products>
              <li>
                <div>
                  <img src={product} alt="Produto" />

                  <div className="column">
                    <div>
                      <strong>Macramê</strong>
                      <span>@ciclanobeltrano</span>
                    </div>
                    <p>R$ 75,00</p>
                  </div>
                </div>

                <input value="2" />
                <p>R$ 150,00</p>
                <strong>X</strong>
              </li>
              <li>
                <div>
                  <img src={product} alt="Produto" />

                  <div className="column">
                    <div>
                      <strong>Macramê</strong>
                      <span>@ciclanobeltrano</span>
                    </div>
                    <p>R$ 75,00</p>
                  </div>
                </div>

                <input value="2" />
                <p>R$ 150,00</p>
                <strong>X</strong>
              </li>
              <li>
                <div>
                  <img src={product} alt="Produto" />

                  <div className="column">
                    <div>
                      <strong>Macramê</strong>
                      <span>@ciclanobeltrano</span>
                    </div>
                    <p>R$ 75,00</p>
                  </div>
                </div>

                <input value="2" />
                <p>R$ 150,00</p>
                <strong>X</strong>
              </li>
              <li>
                <div>
                  <img src={product} alt="Produto" />

                  <div className="column">
                    <div>
                      <strong>Macramê</strong>
                      <span>@ciclanobeltrano</span>
                    </div>
                    <p>R$ 75,00</p>
                  </div>
                </div>

                <input value="2" />
                <p>R$ 150,00</p>
                <strong>X</strong>
              </li>
              <li>
                <div>
                  <img src={product} alt="Produto" />

                  <div className="column">
                    <div>
                      <strong>Macramê</strong>
                      <span>@ciclanobeltrano</span>
                    </div>
                    <p>R$ 75,00</p>
                  </div>
                </div>

                <input value="2" />
                <p>R$ 150,00</p>
                <strong>X</strong>
              </li>
            </Products>
          </div>
          <Order>
            <h1>Resumo do pedido</h1>

            <div>
              <span>Subtotal</span>
              <span>R$150,00</span>
            </div>
            <div>
              <span>Envio</span>
              <span>R$10,00</span>
            </div>

            <div className="border">
              <strong>Total</strong>
              <span>R$160,00</span>
            </div>

            <button type="submit">finalizar pedido</button>
          </Order>
        </div>
      </Container>
      <Footer />
    </>
  );
}
