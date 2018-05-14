import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import benefits from './../../res/img/ReactPresentation/benefits.jpg';

const lineContent = '.';

const Concepts = (
  <Slide transition={["fade"]} bgDarken={0.25} bgImage={benefits}>
    <Heading caps fit textColor="primary">
      Key Concepts
    </Heading>
    <List>
      <Appear>
        <ListItem textColor="tertiary">
          Problem Decomposition
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="tertiary">
          Market Analysis
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="tertiary">
          Alternative Analysis
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="tertiary">
          Resource Management
        </ListItem>
      </Appear>
    </List>
  </Slide>
);

export default Concepts;
