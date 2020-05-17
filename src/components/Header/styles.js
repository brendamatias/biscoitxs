import styled from 'styled-components';

export const Container = styled.div`
  background: #ff6494;
`;

export const Content = styled.div`
  height: 92px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 200px;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      a {
        text-transform: uppercase;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        transition: color 0.2s;

        &:hover {
          color: #ddd;
        }
      }

      & + li {
        margin-left: 40px;
      }

      button {
        border: 3px solid #fff;
        background: transparent;
        border-radius: 36px;
        color: #fff;
        padding: 8px 40px;
        font-weight: 700;
        transition: background 0.2s;

        &:hover {
          background: #fff;
          color: #ff6494;
        }
      }
    }
  }
`;
