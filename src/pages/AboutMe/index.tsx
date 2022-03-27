import { Box, Text, VStack, Grid } from "@chakra-ui/react";

export const AboutMe = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <Text>About me</Text>
      </VStack>
    </Grid>
  </Box>
);
