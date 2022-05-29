import { Box, Flex, Text, VStack, Grid, Image,  useColorModeValue } from "@chakra-ui/react";

import { ContactInfo } from "../../components/ContactInfo"
import ContactForm from "../../components/ContactForm"


export const ContactMe = () => {
  const bg = useColorModeValue("white", "#1A202C")
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
        <ContactInfo />
      </VStack>
    </Grid>
  </Box>
);
}