import { useState } from "react";

import {
  useColorMode,
  Box,
  Flex,
  Switch,
  Button,
  IconButton,
  Link,
  useColorModeValue,
  Stack,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Link as ReachLink } from "@reach/router";

import bbLogo from "../../bb-logo.jpeg";

export const Footer = () => {
  
  return (

      <Flex
      bg={useColorModeValue("#D6FFE9", "#25332B")}
      px={[4,4,4,14]}
      position="absolute"
      bottom="0"
      w="100%"
      h="15em"
      alignItems={"center"}
     
   
      >
        <Stack direction={"row"} alignItems={"flex-start"}  w="100%" justifyContent={"space-between"} spacing={7}>
          <VStack alignItems={"flex-start"}>
          <Link fontSize={30} fontFamily={"serif"} as={ReachLink} to="/">
            Portfolio
          </Link>
          <Link as={ReachLink} to="/">
            Digital Painting
          </Link>
          <Link as={ReachLink} to="/">
            Watercolor
          </Link>
          
         </VStack>
          <VStack>
          <Link fontSize={30} fontFamily={"serif"} as={ReachLink} to="/about-me">
            About me
          </Link>
          </VStack>
          <VStack>
          <Link fontSize={30} fontFamily={"serif"} as={ReachLink} to="/contact">
            Contact
          </Link>
          </VStack>
          <VStack>
          <Link fontSize={30} fontFamily={"serif"} as={ReachLink} to="/Shop">
            Shop
          </Link>
          </VStack>
          <VStack>
          <Link fontSize={30} fontFamily={"serif"} as={ReachLink} to="/Shop">
            Socials
          </Link>
          </VStack>
        </Stack>

      </Flex>
)}
