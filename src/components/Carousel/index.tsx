import { ScrollingCarousel } from '@trendyol-js/react-carousel';
// import { Item } from './yourItem';
import { Image } from "@chakra-ui/react";
import "../../App.css"

export const Carousel = () => (
    <ScrollingCarousel className='scrollable'>
    <Image className='c-image' src="https://www.w3schools.com/w3css/img_lights.jpg" />
    <Image className='c-image' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
    <Image className='c-image' src="https://www.w3schools.com/w3css/img_lights.jpg" />
    <Image className='c-image' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
  </ScrollingCarousel>
);