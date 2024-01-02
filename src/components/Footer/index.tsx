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
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Link as ReachLink } from "@reach/router";

import bbLogo from "../../bb-logo.jpeg";

export const Footer = () => {
  const [display, changeDisplay] = useState("none");
  return (

      <Flex
      bg={useColorModeValue("#D6FFE9", "#25332B")}
      px={4}
      mb={20}
      w="100%"
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
   
      >
        <Stack direction={"row"} alignItems={"center"} spacing={7}>
          <Link as={ReachLink} to="/">
            Portfolio
          </Link>
          <Link as={ReachLink} to="/about-me">
            About me
          </Link>
          <Link as={ReachLink} to="/contact">
            Contact
          </Link>
          <Link as={ReachLink} to="/Shop">
            Shop
          </Link>
        </Stack>
      </Flex>
)}
