import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #747dff;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#747dff')};
  }
`;
