import { Box, Text, VStack, HStack, Grid, Image, Link } from "@chakra-ui/react";
import insta from "../../instagram-logo.png"
import tiktok from "../../tik-tok.png"
export const ContactInfo = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid mt={4} minH="auto" p={3}>
      <VStack spacing={6}>
        <Text textAlign={"left"}>
          E: <Link href="mailto:blendedbirch@mail.com">blendedbirch@mail.com</Link>
        </Text>
        <Text>Follow me:</Text>
        <HStack spacing='16px' >
            <Link href="https://www.instagram.com/blendedbirch/"><Image boxSize="32px" src={insta}/></Link>
            <Link href="https://www.tiktok.com/@blendedbirch"><Image boxSize="32px" src={tiktok}/></Link>
        </HStack>
      </VStack>
    </Grid>
  </Box>
);
