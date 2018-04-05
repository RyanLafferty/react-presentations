import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

const Modular = (
  <Slide transition={['zoom']}>
    <Heading size={1} fit caps>
      Modular
    </Heading>
    <List>
      <Appear>
        <ListItem>Agile Friendly</ListItem>
      </Appear>
      <Appear>
        <ListItem>Parallel Development</ListItem>
      </Appear>
      <Appear>
        <ListItem>Greater Efficiency</ListItem>
      </Appear>
      <Appear>
        <ListItem>Improved Organization</ListItem>
      </Appear>
      <Appear>
        <ListItem>Ability to Pivot</ListItem>
      </Appear>
      <Appear>
        <ListItem>Rapid Prototyping</ListItem>
      </Appear>
    </List>
  </Slide>
);

export default Modular;