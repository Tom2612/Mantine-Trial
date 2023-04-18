import React from 'react';
import { Paper, Image, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import page1 from '../images/page1.JPG';
import page2 from '../images/page2.JPG';
import page3 from '../images/page3.JPG';
import page4 from '../images/page4.JPG';

export default function MyCarousel() {
  return (
    <div style={{ maxWidth: '800px', height: '100', display: 'flex', margin: '0 auto'}}>
      <Carousel 
        maw={800} 
        mx='auto' 
        slideSize='80%'
        height='100%' 
        align='center' 
        slideGap='lg' 
        withIndicators 
        sx={{ flex: 1 }} 
        loop
        styles={{
          indicator: {
            width: rem(12),
            height: rem(4),
            transition: 'width 250ms ease',

            '&[data-active]': {
              width: rem(40),
            },
          },
        }}
      >
        <Carousel.Slide><Paper shadow='sm' padding='lg' radius='md' withBorder><Image src={page1} radius='md' /></Paper></Carousel.Slide>
        <Carousel.Slide><Paper shadow='sm' padding='lg' radius='md' withBorder><Image src={page2} radius='md' /></Paper></Carousel.Slide>
        <Carousel.Slide><Paper shadow='sm' padding='lg' radius='md' withBorder><Image src={page3} radius='md' /></Paper></Carousel.Slide>
        <Carousel.Slide><Paper shadow='sm' padding='lg' radius='md' withBorder><Image src={page4} radius='md' /></Paper></Carousel.Slide>
      </Carousel>
    </div>
  )
}
