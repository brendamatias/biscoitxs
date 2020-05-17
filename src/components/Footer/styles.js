import styled from 'styled-components';

export const Container = styled.div`
  background: #01c57d;
  padding: 50px 0;

  div {
    img {
      max-width: 230px;
    }

    ul {
      display: grid;
      grid-template-columns: 0.5fr 2fr 1fr;
      grid-gap: 80px;

      li {
        strong {
          font-size: 30px;
          font-weight: 700;
        }

        p {
          font-size: 16px;
          margin-top: 6px;
        }

        div {
          margin-top: 6px;

          svg {
            margin-right: 20px;
          }
        }
      }
    }
  }
`;

export const Bottom = styled.div`
  background: #008f5b;
  text-align: center;
  padding: 20px 0;
  font-size: 14px;

  p {
    color: #eee;
  }

  span {
    color: #ff6494;
    margin-left: 3px;
  }
`;
