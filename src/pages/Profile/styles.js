import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
`;

export const Content = styled.div`
  padding: 80px 0;
  width: 100%;

  h1 {
    color: #fff;
    font-weight: 800;
    margin-bottom: 40px;
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 20px 0;
  }
`;
