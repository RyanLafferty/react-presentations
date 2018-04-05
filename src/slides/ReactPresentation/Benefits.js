import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import benefits from './../../res/img/ReactPresentation/benefits.jpg';
        
const lineContent = '.';

const Benefits = (
  <Slide transition={["fade"]} bgDarken={0.25} bgImage={benefits}>
    <Heading caps fit textColor="primary">
      Benefits
    </Heading>
    <List>
      <Appear>
        <ListItem textColor="tertiary">Increased UI coverage</ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="tertiary">
          Improved feedback from focused UI/UX testing 
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="tertiary">
          Increased support for TDD environments
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="tertiary">
          Agile friendly environment
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
        
export default Benefits;