import styled from 'styled-components';

export const Container = styled.div`
  margin: 80px 0;

  .search {
    background: #fff;
    display: flex;
    align-items: center;
    padding: 5px 30px;
    border-radius: 10px;
    margin-bottom: 30px;

    input {
      width: 100%;
      border: 0;
      padding: 10px;
    }

    svg {
      color: #606060;
    }
  }

  .filters {
    display: flex;
    margin-bottom: 60px;

    span {
      background: #69d8e1;
      padding: 10px 40px;
      border-radius: 10px;
      margin-right: 30px;
      color: #fff;
      font-weight: 700;
      transition: opacity 0.2s;
      cursor: pointer;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }

  img {
    max-width: 200px;
  }

  ul {
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* grid-template-columns: repeat(4, 1fr); */
    grid-gap: 40px;
  }
`;
