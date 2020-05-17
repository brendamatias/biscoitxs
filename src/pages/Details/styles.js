import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 80px 0;
  background: #fff;

  > div > div {
    display: flex;
  }

  strong {
    font-weight: 800;
    font-size: 30px;
  }
`;

export const Top = styled.div`
  display: flex;

  > div {
    margin-left: 80px;
  }

  span {
    font-size: 24px;
    font-weight: 600;
    margin: 10px 0;
    display: block;
  }

  svg {
    margin-right: 5px;
  }

  h4 {
    margin-top: 40px;
    font-size: 18px;
    font-weight: 600;
  }

  input {
    margin: 10px 0 30px 0;
    display: block;
    width: 80px;
    border-radius: 6px;
    border: 2px solid #ddd;
    padding: 10px 30px;
  }

  button {
    background: #01c57d;
    border: 0;
    color: #fff;
    padding: 10px 80px;
    border-radius: 36px;
    font-weight: 700;
    font-size: 18px;
  }
`;

export const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 60px;

  p {
    font-size: 20px;
    max-width: 500px;
    margin: 30px 0;
    font-weight: 600;
  }

  svg {
    font-size: 40px;

    & + svg {
      margin-left: 25px;
    }

    margin-bottom: 20px;
  }

  a {
    color: #3483fa;
    font-size: 18px;

    &:hover {
      color: ${shade(0.2, '#3483fa')};
    }
  }
`;

export const Bottom = styled.div`
  flex-direction: column;

  div {
    img {
      max-width: 220px;
      box-shadow: 9px 9px 9px rgba(0, 0, 0, 0.15);
    }

    margin-top: 60px;
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 40px;
  }
`;
