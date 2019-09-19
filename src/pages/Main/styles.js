import styled from 'styled-components';

export const Container = styled.div`
  header {
    height: 60px;
    width: 100%;
    background-color: #00909a;
    box-shadow: 0 0 2px #000;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 30px;
    color: #fff;
    font-weight: bold;
  }

  div.main {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    div.video-wrapper {
      width: 800px;
    }

    aside {
      margin: 50px;

      ul {
        list-style: none;
        background-color: #00a9a4;
        border-radius: 5px;
        padding: 20px;
        margin-left: 100px;

        li {
          font-size: 16px;
          margin-top: 10px;
          color: #fff;
        }
      }
    }
  }
`;
