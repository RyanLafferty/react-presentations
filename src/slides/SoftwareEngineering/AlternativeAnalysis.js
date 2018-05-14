import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import benefits from './../../res/img/ReactPresentation/benefits.jpg';


const AlternativeAnalysis = (
  <Slide transition={['fade']} bgDarken={0.25} bgImage={benefits}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Alternative Analysis
    </Heading>
    <Text textColor="tertiary">
      Consider a number of potential solutions in order to identify the best fit for the problem which you are faced with.
    </Text>
  </Slide>
);

export default AlternativeAnalysis;
