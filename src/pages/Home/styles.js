import styled from 'styled-components';

import background from '~/assets/background-home.png';

export const Container = styled.div`
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
