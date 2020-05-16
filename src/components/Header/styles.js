import styled from 'styled-components';

export const Container = styled.div`
  background: #ff6494;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 140px;
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
      }

      & + li {
        margin-left: 20px;
      }
    }
  }
`;
