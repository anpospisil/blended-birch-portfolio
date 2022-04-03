import { Box, Text, VStack, Grid, Image } from "@chakra-ui/react";
import {ContactInfo} from "../../components/ContactInfo"
import jyriImage from "../../jyri.jpeg" 
export const AboutMe = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid mt={20} minH="100vh" p={3}>
      <VStack spacing={8}>
        <Image boxSize='200px' borderRadius='full' src={jyriImage}/>
        <Text w={["100%", "100%", "100%", "60%"]}   textAlign={"left"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat dui in vestibulum accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec et est eget quam blandit laoreet. Nulla facilisis vulputate augue, semper accumsan est bibendum at. Curabitur et ipsum ac leo tincidunt eleifend mollis a ligula. Cras consequat ex blandit posuere bibendum. Nunc vitae dui est.</Text>
        <ContactInfo />
      </VStack>
    </Grid>
  </Box>
);
