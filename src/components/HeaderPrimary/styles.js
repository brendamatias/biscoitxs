import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #69d8e1;
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
          color: #999;
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

      div {
        display: flex;

        > div {
          padding: 10px;

          a {
            display: flex;
          }

          justify-content: center;
          align-items: center;
          background: #ff6494;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.2s;

          & + div {
            margin-left: 10px;
          }

          &:hover {
            background: ${shade(0.2, '#ff6494')};
          }
        }

        svg {
          color: #fff;
        }
      }
    }
  }
`;
