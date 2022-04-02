import { ReactNode } from "react";
import { Box, Flex, Link, useColorModeValue, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Link as ReachLink } from "@reach/router";

export const Navbar = () => (
  <>
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box fontFamily={"serif"}>BLENDED BIRCH</Box>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Link as={ReachLink} to="/">
              Portfolio
            </Link>
            <Link as={ReachLink} to="/about-me">
              About me
            </Link>
            <Link as={ReachLink} to="/prints">
              Prints
            </Link>
            <Link as={ReachLink} to="/contact">
              Contact
            </Link>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  </>
);
