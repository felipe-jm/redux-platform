import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Video from '../../components/Video';

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <Video />
        <Nav />
      </Container>
    </>
  );
}
