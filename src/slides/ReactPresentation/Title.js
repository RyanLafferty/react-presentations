import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

const Title = (
  <Slide transition={['slide']}>
    <Heading size={1} fit caps lineHeight={1} textColor="black">
      React
    </Heading>
  </Slide>
);

export default Title;