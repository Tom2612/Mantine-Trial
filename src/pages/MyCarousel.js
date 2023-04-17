import React from 'react';
import { Paper, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import page1 from '../images/page1.JPG';
import page2 from '../images/page2.JPG';
import page3 from '../images/page3.JPG';
import page4 from '../images/page4.JPG';

export default function MyCarousel() {
  return (
    // <div style={{ height: '100', display: 'flex'}}>
      <Carousel maw={1260} mx='auto' slideSize='80%' height='100%' align='center' slideGap='xl' withIndicators sx={{ flex: 1 }} loop>
        <Carousel.Slide><Paper shadow='sm' padding='lg' radius='md' withBorder><Image src={page1} radius='md' /></Paper></Carousel.Slide>
        <Carousel.Slide><Paper shadow='sm' padding='lg' radius='md' withBorder><Image src={page2} radius='md' /></Paper></Carousel.Slide>
        <Carousel.Slide><Paper shadow='sm' padding='lg' radius='md' withBorder><Image src={page3} radius='md' /></Paper></Carousel.Slide>
        <Carousel.Slide><Paper shadow='sm' padding='lg' radius='md' withBorder><Image src={page4} radius='md' /></Paper></Carousel.Slide>
      </Carousel>
    // </div>
  )
}
