import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  min-height: 800px;
`;

export const Content = styled.div`
  padding: 80px 0;
  width: 100%;
  color: #fff;

  h1 {
    font-weight: 800;
    margin-bottom: 40px;
  }

  li {
    display: grid;
    grid-template-columns: 1fr 0.4fr;

    & + li {
      margin-top: 40px;
    }

    button {
      background: #747dff;
      color: #fff;
      border: 0;
      border-radius: 36px;
      height: 40px;
      width: 160px;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, '#747dff')};
      }
    }
  }
`;
