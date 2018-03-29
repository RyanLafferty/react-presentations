import React, { Component } from 'react';
import createTheme from "spectacle/lib/themes/default";
import { Deck } from 'spectacle';

import Title from './../../slides/ReactPresentation/Title';
import CDD from './../../slides/ReactPresentation/CDD';


const theme = createTheme({
  primary: '#ff4081',
});


class Main extends Component {
  render() {
    return (
        <Deck theme={theme} transition={['zoom', 'slide', 'fade']} transitionDuration={500}>
            <Title />
            <CDD />
        </Deck>
    );
  }
}

export default Main;