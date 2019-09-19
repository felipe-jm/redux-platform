import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

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
    justify-content: space-around;
    height: 100%;

    div.video-wrapper {
      width: 800px;
    }

    aside {
      margin: 50px;
      background-color: #00a9a4;
      border-radius: 5px;
      height: 75%;
      width: 25%;
      padding: 20px;
      margin-left: 100px;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        border: 2px solid #00909a;
      }

      ul {
        list-style: none;

        li {
          font-size: 16px;
          margin-top: 10px;
          color: #fff;
        }
      }
    }
  }
`;
