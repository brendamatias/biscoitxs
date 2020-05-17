import styled from 'styled-components';

import background from '~/assets/background-home.png';

export const Banner = styled.div`
  background: #ff6494;
  background: url(${background}) no-repeat;
  background-position: bottom right 150px;
  /* background-size: 50%; */
  color: #fff;

  > div {
    height: calc(100vh - 92px);
    display: flex;
    align-items: center;
  }

  strong {
    font-weight: 800;
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
      transition: background 0.2s;

      &:hover {
        background: #747dff;
        color: #fff;
      }
    }
  }
`;

export const Products = styled.div`
  background: #747dff;
  color: #fff;
  text-align: center;
  padding: 80px 0;

  h1 {
    font-weight: 800;
  }

  > div > div {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin: 0 60px;
    }

    svg {
      background: #fff;
      color: #747dff;
      border-radius: 50%;
      padding: 5px;
    }
  }

  button {
    margin-top: 80px;
    background: #fff;
    border: 0;
    color: #747dff;
    padding: 10px 60px;
    border-radius: 36px;
    font-weight: 700;
    transition: background 0.2s;

    &:hover {
      background: #ff6494;
      color: #fff;
    }
  }
`;

export const Timeline = styled.div`
  background: #69d8e1;
  color: #fff;
  text-align: center;
  padding: 80px 0;

  h1 {
    font-weight: 800;
  }

  img {
    margin: 80px 0;
    max-width: 600px;
  }

  button {
    background: #fff;
    border: 0;
    color: #747dff;
    padding: 10px 60px;
    border-radius: 36px;
    font-weight: 700;
    transition: background 0.2s;

    &:hover {
      background: #ff6494;
      color: #fff;
    }
  }
`;

export const App = styled.div`
  padding: 80px 0;
  background: #fff;
  text-align: center;

  h1 {
    font-weight: 800;
    margin-bottom: 40px;
  }

  p {
    max-width: 460px;
    font-size: 22px;
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
    transition: background 0.2s;
    border: 2px solid transparent;

    &:hover {
      background: #fff;
      color: #ff6494;
      border: 2px solid #ff6494;
    }
  }
`;

export const Circle = styled.div`
  border: 8px solid ${props => props.color};
  border-radius: 50%;
  width: 110px;
  height: 45px;
  margin-right: 40px;
`;
