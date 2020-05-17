import styled from 'styled-components';

import background from '~/assets/background-home.png';

export const Banner = styled.div`
  background: #01c57d;
  /* background: url(${background}) no-repeat; */
  /* background-position: bottom right 150px; */
  /* background-size: 50%; */
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
      max-width: 400px;

      strong {
        font-weight: 800;
      }
    }

    .width {
      margin-top: 20px;
      max-width: 580px;
    }
  }
`;

export const Formation = styled.div`
  background: #ffad01;
  color: #fff;
  text-align: center;
  padding: 80px 0;

  h1 {
    font-weight: 800;
  }

  > div > div {
    display: grid;
    text-align: left;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    margin: 40px 0;

    ul {
      background: #fff;
      color: #000;
      border-radius: 60px 10px;
      padding: 60px 35px;

      h2 {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        font-weight: 800;
        color: #ffad01;

        span {
          display: flex;
          align-items: center;
          justify-content: center;

          background: #ffad01;
          margin-right: 10px;
          border-radius: 50%;
          width: 30px;
          height: 30px;
        }

        svg {
          color: #fff;
        }
      }

      strong {
        display: block;
        font-weight: 800;
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 5px;
      }
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
