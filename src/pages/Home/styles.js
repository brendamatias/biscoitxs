import styled from 'styled-components';

import background from '~/assets/background-home.png';

export const Banner = styled.div`
  background: url(${background}) no-repeat center;
  background-color: #fff;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 92px);

  div {
    text-align: center;

    img {
      max-width: 500px;
    }

    h1 {
      font-size: 36px;
      color: #000;
      font-weight: 700;
    }

    button {
      margin-top: 30px;
      width: 300px;
    }
  }
`;

export const Products = styled.div`
  background: #69d8e1;

  h1 {
    font-size: 30px;
    color: #000;
    font-weight: 800;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;

    li {
      div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 220px;

        background: #fff;

        img {
          width: 180px;
          height: 240px;
        }
      }
    }
  }
`;
