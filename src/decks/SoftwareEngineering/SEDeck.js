import React, { Component } from 'react';
import createTheme from "spectacle/lib/themes/default";
import { Deck } from 'spectacle';

import Title from './../../slides/SoftwareEngineering/Title';
import Concepts from "../../slides/SoftwareEngineering/Concepts";
import Process from "../../slides/SoftwareEngineering/Process";
import MarketAnalysis from "../../slides/SoftwareEngineering/MarketAnalysis";
import ResourceManagement from "../../slides/SoftwareEngineering/ResourceManagement";
import AlternativeAnalysis from "../../slides/SoftwareEngineering/AlternativeAnalysis";


const theme = createTheme({
  primary: '#B2FF59',
});


class SEDeck extends Component {
  render() {
    return (
      <Deck theme={theme} transition={['zoom', 'slide', 'fade']} transitionDuration={500}>
        {Title}
        {Concepts}
        {Process}
        {MarketAnalysis}
        {ResourceManagement}
        {AlternativeAnalysis}
      </Deck>
    );
  }
}

export default SEDeck;
