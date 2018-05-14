import React from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';
import benefits from './../../res/img/ReactPresentation/benefits.jpg';


const Concepts = (
  <Slide transition={["fade"]} bgDarken={0.25} bgImage={benefits}>
    <Heading caps fit textColor="primary">
      Problem Solving Process
    </Heading>
    <List ordered>
      <Appear>
        <ListItem textColor="tertiary">
          Define the problem
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="tertiary">
          Brainstorm solutions
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="tertiary">
          Choose the solution with the best fit
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="tertiary">
          Implement the selected solution
        </ListItem>
      </Appear>
    </List>
  </Slide>
);

export default Concepts;
