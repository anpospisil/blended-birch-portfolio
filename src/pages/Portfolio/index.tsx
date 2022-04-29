import { Box, Button } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Picture } from "../../components/Carousel";

import { useRef, useEffect } from "react";
import "../../App.css"

import { useHorizontalScroll, backToStart, forwardToEnd } from "../../components/Carousel/scroll";


export const Portfolio = () => {
  const scrollRef:any = useRef();
  useHorizontalScroll(scrollRef)
  function handleBackClick() {
    backToStart(scrollRef)
}
function handleForwardClick() {
  forwardToEnd(scrollRef)
}

  return (
    <Box>    
      <Box className="galleryContainer" ref={scrollRef}  mt={20}>
      <Picture  />
      </Box>
      <ArrowLeftIcon onClick={handleBackClick}/>
      <ArrowRightIcon onClick={handleForwardClick}></ArrowRightIcon>
      </Box>
  );
  };
