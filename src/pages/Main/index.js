import React from 'react';
import Plyr from 'react-plyr';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <header>Agro+</header>
      <div className="main">
        <div className="video-wrapper">
          <Plyr type="vimeo" videoId="223981005" />
        </div>
        <aside>
          <ul>
            <li>Vídeo 1</li>
            <li>Vídeo 2</li>
            <li>Vídeo 3</li>
          </ul>
        </aside>
      </div>
    </Container>
  );
}
