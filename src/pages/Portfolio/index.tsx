import { Box, Text, VStack, Grid, Image } from "@chakra-ui/react";
import {Carousel} from "../../components/Carousel"
export const Portfolio = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid mt={20} minH="100vh" >
      <VStack spacing={8}>
        <Text textAlign={"left"}>Portfolio</Text>
        <Carousel />
      </VStack>
    </Grid>
  </Box>
);
