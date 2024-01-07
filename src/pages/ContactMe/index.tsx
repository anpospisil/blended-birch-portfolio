import { Box, Flex, Text, VStack, Grid, Image,  useColorModeValue } from "@chakra-ui/react";

import { Socials } from "../../components/Socials"
import ContactForm from "../../components/ContactForm"


export const ContactMe = () => {
  const bg = useColorModeValue("#F4F0F9", "#1A202C")
return(
<Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <Text textAlign={"left"}>
          Contact
        </Text>
        <ContactForm />
        <Flex h={"44px"} w={"100%"} pos={"relative"}
        bg={bg}
        zIndex={21} mt={"-44px!important"} >
          
        </Flex>
        <Socials />
      </VStack>
    </Grid>
  </Box>
);
}