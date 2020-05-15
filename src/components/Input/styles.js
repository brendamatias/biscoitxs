import styled from 'styled-components';

export const Container = styled.div`
  background: #ff85a8;
  border-radius: 10px;
  border: 2px solid #ff85a8;
  padding: 16px;
  width: 100%;
  color: rgba(255, 255, 255, 0.5);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  svg {
    margin-right: 16px;
  }
`;
