import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import focus from './../../res/img/ReactPresentation/focus.jpeg';
        
const lineContent = '.';

const FocusedDevelopment = (
  <Slide  transition={["fade"]} bgDarken={0.25} bgImage={focus}>
    <Heading caps fit textColor="tertiary" lineHeight={0}>
      Focused Development
    </Heading>
    <Heading caps fit textColor="tertiary" lineHeight={1}>
      {lineContent}
    </Heading>
  </Slide>
);
        
export default FocusedDevelopment;