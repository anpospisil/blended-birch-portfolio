import { Box, Text, VStack, Grid, Image } from "@chakra-ui/react";
export const Portfolio = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid mt={20} minH="100vh" p={3}>
      <VStack spacing={8}>
        <Text textAlign={"left"}>Portfolio</Text>
      </VStack>
    </Grid>
  </Box>
);
