import React from 'react';
import Plyr from 'react-plyr';

import { Container } from './styles';

export default function Video() {
  return (
    <Container>
      <Plyr type="youtube" videoId="u99tNt3TZf8" />
    </Container>
  );
}
