import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import benefits from './../../res/img/ReactPresentation/benefits.jpg';


const MarketAnalysis = (
  <Slide transition={['fade']} bgDarken={0.25} bgImage={benefits}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Market Analysis
    </Heading>
    <Text textColor="tertiary">
      Identify what the competition is doing including analysis of trends implemented by industry leaders.
    </Text>
    <Text>
      ...
    </Text>
    <Text textColor="tertiary">
      Maintaining continuity with industry leaders will increase user adoption due to familiarity.
    </Text>
    <Text>
      ...
    </Text>
    <Text textColor="tertiary">
      An example of this would be implementing a Material user interface; leaders such as Apple and Google have both adopted Material Design in their interfaces.
    </Text>
  </Slide>
);

export default MarketAnalysis;
