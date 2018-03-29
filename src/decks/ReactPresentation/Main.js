import React, { Component } from 'react';
import createTheme from "spectacle/lib/themes/default";
import { Deck } from 'spectacle';

import Title from './../../slides/ReactPresentation/Title';

const theme = createTheme({
  primary: '#ff4081',
});


class Main extends Component {
  render() {
    return (
        <Deck theme={theme}>
            <Title />
        </Deck>
    );
  }
}

export default Main;