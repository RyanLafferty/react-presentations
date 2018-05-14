import React, { Component } from 'react';
import createTheme from "spectacle/lib/themes/default";
import { Deck } from 'spectacle';

import Title from './../../slides/SoftwareEngineering/Title';
import Concepts from "../../slides/SoftwareEngineering/Concepts";
import Process from "../../slides/SoftwareEngineering/Process";
import MarketAnalysis from "../../slides/SoftwareEngineering/MarketAnalysis";


const theme = createTheme({
  primary: '#27BDCE',
});


class SEDeck extends Component {
  render() {
    return (
      <Deck theme={theme} transition={['zoom', 'slide', 'fade']} transitionDuration={500}>
        {Title}
        {Concepts}
        {Process}
        {MarketAnalysis}
      </Deck>
    );
  }
}

export default SEDeck;
