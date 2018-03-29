import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import city from './../../res/img/ReactPresentation/city.jpeg';
        

const CDD = (
  <Slide  transition={["fade"]} bgDarken={0.75} bgImage={city}>
      <Heading size={1} caps fit textColor="primary">
        Component Driven Development
      </Heading>
     <Appear>
      <Heading caps textColor="tertiary">
        Modular
      </Heading>
    </Appear>
    <Appear>
      <Heading caps textColor="tertiary">
        Maintainable
      </Heading>
    </Appear>
    <Appear>
      <Heading caps textColor="tertiary">
        Reusable
      </Heading>
    </Appear>
    <Appear>
      <Heading caps fit textColor="tertiary">
        Focused Development
      </Heading>
    </Appear>
  </Slide>
);
        
export default CDD;