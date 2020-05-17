import styled from 'styled-components';

import background from '~/assets/background-home.png';

export const Banner = styled.div`
  background: #ff6494;
  background: url(${background}) no-repeat;
  background-position: bottom right 150px;
  color: #fff;

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

export const App = styled.div`
  padding: 80px 0;
  background: #fff;
  text-align: center;

  h1 {
    font-weight: 800;
    margin-bottom: 20px;
  }

  p {
    max-width: 460px;
    font-size: 24px;
    margin: 0 auto 10px auto;
  }
`;

export const ListApp = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  text-align: left;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 360px;
    margin-right: 60px;
  }

  ul {
    li {
      display: flex;

      & + li {
        margin-top: 40px;
      }

      strong {
        display: block;
        font-size: 24px;
        font-weight: 800;
        margin-bottom: 5px;
      }

      span {
        font-size: 20px;
      }
    }
  }

  button {
    border: 0;
    color: #fff;
    background: #ff6494;
    padding: 10px 60px;
    border-radius: 36px;
    font-weight: 700;
    margin-top: 60px;
  }
`;

export const Number = styled.div`
  border: 10px solid ${props => props.color};
  border-radius: 50%;
  width: 80px;
  height: 65px;
  margin-right: 40px;
`;
