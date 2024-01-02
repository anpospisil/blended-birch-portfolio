import { Box, useMediaQuery } from "@chakra-ui/react";

import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Picture } from "../../components/Carousel";
import { ImageList } from "../../components/ImageList";
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
const [isSmallerThan991] = useMediaQuery('(max-width: 991px)')

  return (
    // <Box>    
    //   <Box className="galleryContainer"  ref={scrollRef} h={"100%"} mt={10}>
    //   <Picture />
    //   </Box>
    //   {/* <ArrowLeftIcon onClick={handleBackClick}/>
    //   <ArrowRightIcon onClick={handleForwardClick}></ArrowRightIcon> */}
    //   </Box>
    <Box 
    px={[4, 4, 4, 14]}
    mb={20}
    >
      <ImageList />
    </Box>
  );
  };
