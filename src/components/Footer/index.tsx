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

import { Socials } from "../Socials";

export const Footer = () => {
  return (
    <Flex
      bg={useColorModeValue("#D6FFE9", "#25332B")}
      px={[4, 4, 4, 14]}
      position="absolute"
      bottom="0"
      w="100%"
      h="24em"
      alignItems={"center"}
    >
      <Stack
        direction={"row"}
        alignItems={"flex-start"}
        w="100%"
        justifyContent={"space-between"}
      >
        <VStack>
          <VStack alignItems={"flex-start"}>
            <Link fontSize={30} fontFamily={"serif"} as={ReachLink} to="/">
              Portfolio
            </Link>
            <Link as={ReachLink} to="/">
              Digital Paintings
            </Link>
            <Link as={ReachLink} to="/">
              Watercolor
            </Link>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <Link
              fontSize={30}
              fontFamily={"serif"}
              as={ReachLink}
              to="/about-me"
            >
              About me
            </Link>
            <Link as={ReachLink} to="/">
              My story
            </Link>
            <Link as={ReachLink} to="/">
              Socials
            </Link>
          </VStack>
        </VStack>
        <VStack>
          <VStack alignItems={"flex-start"}>
            <Link
              fontSize={30}
              fontFamily={"serif"}
              as={ReachLink}
              to="/contact"
            >
              Contact
            </Link>
            <Link as={ReachLink} to="/">
              Contact form
            </Link>
            <Link as={ReachLink} to="/">
              Commission Enquiry
            </Link>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <Link fontSize={30} fontFamily={"serif"} as={ReachLink} to="/Shop">
              Shop
            </Link>
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
