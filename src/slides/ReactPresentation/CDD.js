import React, { Component } from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

import city from './../../res/img/ReactPresentation/city.jpeg';
        
class CDD extends Component {
  render() {
    return (
      <Slide bgDarken={0.75}>
      <Text>DOES THIS WORK</Text>
        <Appear>
          <Heading size={1} caps fit textColor="primary">
            Text 1
          </Heading>
        </Appear>
        <Appear>
          <Heading size={1} caps fit textColor="tertiary">
            Text 2
          </Heading>
        </Appear>
        <Appear>
          <Heading size={1} caps fit textColor="primary">
            Text 2
          </Heading>
        </Appear>
      </Slide>
    );
  }
}
        
export default CDD;