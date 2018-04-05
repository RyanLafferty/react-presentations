import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import mountain from './../../res/img/ReactPresentation/mountain.png';

const Maintainable = (
  <Slide transition={['spin']} bgDarken={0.80} bgImage={mountain}>
    <Heading size={1} caps>
      Maintainable
    </Heading>
    <Appear>
      <BlockQuote>
        <Quote textColor="tertiary">about 90% of the cost related to the software life is in the maintenance phase</Quote>
        <Cite>Nafiseh Hajrahimi</Cite>
      </BlockQuote>
    </Appear>
  </Slide>
);

export default Maintainable;