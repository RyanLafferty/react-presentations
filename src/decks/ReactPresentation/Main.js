import React, { Component } from 'react';
import { Deck } from 'spectacle';

import Title from './../../slides/ReactPresentation/Title';

class Main extends Component {
  render() {
    return (
        <Deck>
            <Title />
        </Deck>
    );
  }
}

export default Main;