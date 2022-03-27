import * as React from "react";
import { Box, Text, VStack, Grid } from "@chakra-ui/react";

export const Home = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <Text>Home</Text>
      </VStack>
    </Grid>
  </Box>
);
