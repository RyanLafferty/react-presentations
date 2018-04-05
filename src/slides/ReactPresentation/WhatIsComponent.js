import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import deconstructed from './../../res/img/ReactPresentation/deconstructed.jpg';


const WhatIsComponent = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={deconstructed}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      What is a Component?
    </Heading>
    <Text textColor="tertiary">
      A component is a uniquely identifiable part, piece, assembly or subassembly, system or subsystem.
    </Text>
    <Text>
        ...
    </Text>
    <Text textColor="tertiary">
      Think of a component like a tangible object such as a wheel. A wheel is part of a car but is also made up of other components such as
      a tire, valve and rim. A car utilizes several wheels in order to move forward relying on other components for propulsion.
    </Text>
  </Slide>
);

export default WhatIsComponent;