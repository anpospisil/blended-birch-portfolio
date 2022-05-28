import { Box, Text, VStack, Grid, Image } from "@chakra-ui/react";
import { ContactInfo } from "../../components/ContactInfo"
import ContactForm from "../../components/ContactForm"
export const ContactMe = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <Text textAlign={"left"}>
          Contact
        </Text>
        <ContactForm />
        <ContactInfo />
      </VStack>
    </Grid>
  </Box>
);
