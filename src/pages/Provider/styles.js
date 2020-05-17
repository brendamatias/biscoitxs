import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 80px 0;

  img {
    margin-right: 80px;
  }

  .flex {
    display: flex;
  }

  > div > div {
    align-items: center;
  }

  h1 {
    font-weight: 700;
    font-size: 34px;
    color: #ff6494;
  }

  p {
    font-size: 20px;
    max-width: 500px;
    margin: 30px 0;
    font-weight: 600;
  }

  strong {
    font-weight: 800;
    font-size: 30px;
    margin: 20px 0;
    display: block;
  }

  .bottom {
    strong,
    p {
      margin: 0;

      svg {
        margin-right: 5px;
      }
    }

    div {
      margin-right: 60px;
    }

    > div > div {
      svg {
        margin-right: 10px;
      }
    }
  }

  .products {
    margin-top: 60px;

    div {
      img {
        max-width: 220px;
        box-shadow: 9px 9px 9px rgba(0, 0, 0, 0.15);
      }

      margin-top: 60px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      grid-gap: 40px;
    }
  }
`;
