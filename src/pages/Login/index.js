import React from 'react';

import history from '../../services/history';
import { Container, LoginBox } from './styles';

export default function Login() {
  const handleLogin = () => {
    history.push('/main');
  };

  return (
    <Container>
      <LoginBox>
        <input type="text" placeholder="Digite seu usuário" />
        <input type="text" placeholder="Digite sua senha" />
        <button type="button" onClick={() => handleLogin()}>
          Entrar
        </button>
      </LoginBox>
    </Container>
  );
}
