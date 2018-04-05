import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import confused from './../../res/img/ReactPresentation/confused.jpg';


const ComponentSlide = (
  <Slide transition={['fade']}>
    <Image src={confused} margin="0px auto 40px" />
    <Heading size={2} caps fit textColor="tertiary" textFont="primary">
      Component?
    </Heading>
  </Slide>
);

export default ComponentSlide;