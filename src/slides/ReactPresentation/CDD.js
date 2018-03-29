import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import city from './../../res/img/ReactPresentation/city.jpeg';
        

const CDD = (
  <Slide bgDarken={0.75} bgImage={city}>
    <Appear>
      <Heading size={1} caps fit textColor="primary">
      Text 1
      </Heading>
    </Appear>
    <Appear>
      <Heading size={1} caps fit textColor="tertiary">
        Text 2
      </Heading>
    </Appear>
    <Appear>
      <Heading size={1} caps fit textColor="primary">
        Text 3
      </Heading>
    </Appear>
  </Slide>
);
        
export default CDD;