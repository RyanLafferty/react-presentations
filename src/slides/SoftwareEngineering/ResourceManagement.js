import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import benefits from './../../res/img/ReactPresentation/benefits.jpg';


const ResourceManagement = (
  <Slide transition={['fade']} bgDarken={0.25} bgImage={benefits}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Resource Management
    </Heading>
    <Text textColor="tertiary">
      Select the optimal solution by identifying allocated resources and utilize them to their fullest potential (Time & Money).
    </Text>
  </Slide>
);

export default ResourceManagement;
