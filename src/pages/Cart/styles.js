import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 80px 0;

  > div {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    grid-gap: 60px;

    h1 {
      font-weight: 800;
      border-bottom: 1px solid #c5c5c5;
      margin-bottom: 20px;
    }
  }
`;

export const Products = styled.ul`
  img {
    max-width: 140px;
    margin-right: 25px;
  }

  li {
    display: flex;
    justify-content: space-between;

    & + li {
      margin-top: 60px;
    }

    > div {
      display: flex;
    }

    .column {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    strong {
      display: block;
      font-weight: 800;
      font-size: 20px;
      margin-bottom: 4px;
    }

    span {
      font-size: 18px;
      font-weight: 600;
    }

    p {
      font-size: 20px;
      font-weight: 600;
    }

    input {
      width: 70px;
      height: 50px;
      border-radius: 6px;
      border: 2px solid #ddd;
      padding: 10px 25px;
    }
  }
`;

export const Order = styled.div`
  .border {
    margin-top: 60px;
    border-top: 1px solid #c5c5c5;
    padding-top: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 18px;
    }

    strong {
      font-size: 24px;
      font-weight: 800;
    }
  }

  button {
    background: #01c57d;
    border: 0;
    color: #fff;
    width: 100%;
    padding: 10px 0;
    border-radius: 36px;
    font-weight: 700;
    font-size: 18px;
    margin-top: 30px;
  }
`;
