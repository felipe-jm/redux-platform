import styled from 'styled-components';

import background from '../../assets/images/agro.jpg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;

export const LoginBox = styled.div`
  height: 300px;
  width: 400px;
  background: #008b74;
  border-radius: 8px;
  box-shadow: 0px 0px 4px #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
  }

  input {
    border: 2px solid #008b74;
    margin-top: 15px;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    transition: border 0.2s;

    &:hover {
      border: 2px solid #00c2a8;
    }
  }

  button {
    border: 0;
    background: #00c2a8;
    padding: 10px 30px;
    border-radius: 5px;
    color: #fff;
    margin-top: 15px;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.4;
    }
  }
`;
