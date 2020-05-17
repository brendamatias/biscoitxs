import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #f3f3f3;
  padding: 80px 40px;

  h2 {
    font-weight: 800;
    margin-bottom: 30px;
  }

  li {
    display: flex;
    align-items: center;
    font-weight: 600;

    a {
      color: #000;
      transition: color 0.2s;

      &:hover {
        color: #ff6494;
      }
    }

    margin: 20px 0;

    svg {
      margin-right: 10px;
    }

    button {
      margin-top: 40px;
      background: #747dff;
      color: #f3f3f3;
      width: 100%;
      border: 0;
      border-radius: 36px;
      padding: 10px 0;
      font-weight: 700;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, '#747dff')};
      }
    }
  }
`;
