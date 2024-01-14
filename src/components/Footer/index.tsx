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
  Heading
} from "@chakra-ui/react";

import { Link as ReachLink } from "@reach/router";
import { Socials } from "../Socials";

import woodLt from "../../images/woodLt.svg"
import woodDk from "../../images/woodDk.svg"
export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex
    bg={useColorModeValue("#eafff4", "#007f68")}
      bgImage={colorMode === "light" ? woodLt : woodDk}
      position="absolute"
      bottom="0"
      w="100%"
      h="24em"
      alignItems={"center"}
     
      
    >
      <Stack
        direction={"row"}
        alignItems={"flex-start"}
        
        px={[4, 4, 4, 14]}
        w="100%"
        maxW={"1400px"}
        m={"0 auto"}
        justifyContent={"space-between"}
      >
        <VStack m={0} spacing={16}  alignItems={"flex-start"}>
          <VStack alignItems={"flex-start"} >
            <Heading><Link fontSize={30}  as={ReachLink} to="/">
              Portfolio
            </Link></Heading>
            <Link as={ReachLink} to="/">
              Digital Paintings
            </Link>
            <Link as={ReachLink} to="/">
              Watercolor
            </Link>
          </VStack>
          <VStack alignItems={"flex-start"}>
          <Heading><Link
              fontSize={30}
              
              as={ReachLink}
              to="/about-me"
            >
              About me
            </Link></Heading>
            <Link as={ReachLink} to="/">
              My story
            </Link>
            <Link as={ReachLink} to="/">
              Socials
            </Link>
          </VStack>
        </VStack>
        <VStack spacing={16}>
          <VStack alignItems={"flex-start"}>
          <Heading><Link
              fontSize={30}
              
              as={ReachLink}
              to="/contact"
            >
              Contact
            </Link></Heading>
            <Link as={ReachLink} to="/">
              Contact form
            </Link>
            <Link as={ReachLink} to="/">
              Commission Enquiry
            </Link>
          </VStack>
          <VStack w={"100%"} alignItems={"flex-start"}>
          <Heading><Link fontSize={30}  as={ReachLink} to="/Shop">
              Shop
            </Link></Heading>
            <Link as={ReachLink} to="/">
              New prints
            </Link>
            <Link as={ReachLink} to="/">
              Watercolor prints
            </Link>
            <Link as={ReachLink} to="/">
              Digital prints
            </Link>
          </VStack>
        </VStack>
        <VStack alignItems={"flex-start"}>
          <Socials />
        </VStack>
      </Stack>
    </Flex>
  );
};
