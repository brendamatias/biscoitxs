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

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;

    li {
      div {
        display: grid;
        grid-template-columns: 1fr 0.6fr;
      }
    }
  }
`;

export const Status = styled.span`
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 10px 40px;
  font-weight: 700;
  border-radius: 36px;
  color: ${props => (props.status === 'finished' ? '#01C57D' : '#747DFF')};
`;
