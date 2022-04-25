import { Box} from "@chakra-ui/react";
import { Picture } from "../../components/Carousel";
import "../../App.css"

import {useHorizontalScroll } from "../../components/Carousel/scroll";

export const Portfolio = () => {
  const scrollRef:any = useHorizontalScroll();
  return (
    <Box className="galleryContainer" ref={scrollRef}  mt={20}>
     
      <Picture  />
     
      </Box>
  );
  };
