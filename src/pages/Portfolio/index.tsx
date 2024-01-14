import { Box, useMediaQuery } from "@chakra-ui/react";

import { ImageList } from "../../components/ImageList";

import "../../App.css"




export const Portfolio = () => {

const [isSmallerThan991] = useMediaQuery('(max-width: 991px)')

  return (

    <Box 
    maxW={"1400px"}
    px={[4, 4, 4, 14]}
    m={"0 auto"}
    mb={20}
    >
      <ImageList />
    </Box>
  );
  };
