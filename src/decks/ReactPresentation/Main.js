import React, { Component } from 'react';
import createTheme from "spectacle/lib/themes/default";
import { Deck } from 'spectacle';

import Title from './../../slides/ReactPresentation/Title';
import CDD from './../../slides/ReactPresentation/CDD';
import Modular from '../../slides/ReactPresentation/Modular';
import Maintainable from '../../slides/ReactPresentation/Maintainable';
import FocusedDevelopment from '../../slides/ReactPresentation/FocusedDevelopment';
import Reusable from '../../slides/ReactPresentation/Reusable';
import Benefits from '../../slides/ReactPresentation/Benefits';
import ComponentSlide from '../../slides/ReactPresentation/ComponentSlide';
import WhatIsComponent from '../../slides/ReactPresentation/WhatIsComponent';

const theme = createTheme({
  primary: '#27BDCE',
});


class Main extends Component {
  render() {
    return (
        <Deck theme={theme} transition={['zoom', 'slide', 'fade']} transitionDuration={500}>
            {Title}
            {CDD}
            {ComponentSlide}
            {WhatIsComponent}
            {Modular}
            {Maintainable}
            {FocusedDevelopment}
            {Reusable}
            {Benefits}
        </Deck>
    );
  }
}

export default Main;