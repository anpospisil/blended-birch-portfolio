import { ReactNode } from "react";
import { Box, Flex, Link, useColorModeValue, Stack, Image, HStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Link as ReachLink } from "@reach/router";
import bbLogo from "../../bb-logo.jpeg"
export const Navbar = () => (
  <>
      
      <Flex bg={useColorModeValue("gray.100", "gray.900")} px={4} mb={20} w='100%' h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack fontFamily={"serif"}><Image w={10} src={bbLogo} /><Box>BLENDED BIRCH</Box></HStack>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} alignItems={"center"} spacing={7}>
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
   
  </>
);
