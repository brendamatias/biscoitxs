import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export const Container = styled.div`
  background: #ff85a8;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #ff85a8;
  color: rgba(255, 255, 255, 0.5);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #747dff;
      border-color: #747dff;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #747dff;
    `}

    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}

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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
