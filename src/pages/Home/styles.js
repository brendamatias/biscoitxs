import styled from 'styled-components';

import background from '~/assets/background-home.png';

export const Banner = styled.div`
  background: #ff6494;
  background: url(${background}) no-repeat;
  background-position: bottom right 150px;

  > div {
    height: calc(100vh - 92px);
    display: flex;
    align-items: center;
  }

  div {
    img {
      max-width: 500px;
    }

    p {
      font-size: 28px;
      max-width: 440px;
    }

    button {
      margin-top: 100px;
      width: 240px;
      background: #fff;
      color: #747dff;
      font-size: 18px;
      border-radius: 36px;
      border: 0;
      font-weight: 700;

      &:hover {
        background: #747dff;
        color: #fff;
      }
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
