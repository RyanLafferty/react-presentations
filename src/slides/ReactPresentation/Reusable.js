import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import modular from './../../res/img/ReactPresentation/modular.png';
        
const lineContent = '.';

const Reusable = (
  <Slide  transition={["slide"]} bgDarken={0.85} bgImage={modular}>
    <Heading caps fit textColor="tertiary">
      Reusable
    </Heading>
    <List>
      <Appear>
        <ListItem textColor="primary">Shared Component Libraries</ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="primary">Consistency Across Products & Services</ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="primary">Adaptable UI/UX</ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="primary">Reduced Development Time & Maintenance</ListItem>
      </Appear>
    </List>
  </Slide>
);
        
export default Reusable;