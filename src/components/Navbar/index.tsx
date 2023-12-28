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
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Link as ReachLink } from "@reach/router";

import bbLogo from "../../bb-logo.jpeg";

export const Navbar = () => {
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
      {/* Logo */}
      <HStack justifySelf={"flex-start"} fontFamily={"serif"}>
        <Image w={10} src={bbLogo} />
        <Box>BLENDED BIRCH</Box>
      </HStack>

      {/* Desktop */}
      <Flex display={["none", "none", "flex", "flex"]} justifySelf={"flex-end"} marginLeft={"auto"} alignItems={"center"}>
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
        </Stack>
      </Flex>

      {/* Mobile */}
     

      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")} // added line
          />
        </Flex>

        <Flex flexDir="column" align="center">
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
        </Flex>
      </Flex>
      <Flex justifyItems={"flex-end"} alignItems={"center"}>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")} // added line
          display={["flex", "flex", "none", "none"]}
        />
     
      <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
};
