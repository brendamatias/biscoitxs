import React from 'react';

import Header from '~/components/Header';
import Button from '~/components/Button';

import logoBlack from '~/assets/logo-black.png';

import { Container } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <img src={logoBlack} alt="Biscoitxs" />
          <h1>bom para você, bom para todxs.</h1>

          <Button>Vem cá e conheçe a gente</Button>
        </div>
      </Container>
    </>
  );
}
