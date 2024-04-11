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
  Text
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Link as ReachLink } from "@reach/router";
import woodLt from "../../images/woodLt.svg"
import woodDk from "../../images/woodDk.svg"
import insta from "../../images/instagram-dk.svg"
import tiktok from "../../images/tik-tok-dk.svg"
import artSt from "../../images/art-dk.svg"
import instaLt from "../../images/instagram-lt.svg"
import tiktokLt from "../../images/tik-tok-lt.svg"
import artStLt from "../../images/art-lt.svg"

export const Navbar = () => {
  const [display, changeDisplay] = useState("none");
  const { colorMode, toggleColorMode } = useColorMode()
  return (
   
    <Flex
      bg={useColorModeValue("#eafff4", "#006653")}
      bgImage={colorMode === "light" ? woodLt : woodDk}

      mb={20}
      w="100%"
      h={16}
      // alignItems={"center"}
    
    >
      <HStack w={"100%"} m={"0 auto"}
        justifyContent={"space-between"}
        px={[4, 4, 4, 14]}
      maxW="1400px"
      > 
      {/* Logo */}
      <HStack justifySelf={"flex-start"} fontFamily={"serif"}>
        <Link _hover={{ textDecoration: "none" }} as={ReachLink} to="/">
        <Text id="logo" fontSize={"32px"} fontFamily={"Major Mono Display, monospace"} fontWeight="700"><span className="first-ltrs">B</span><span className="mobile">lended</span><span className="mobile">&nbsp;</span><span className="first-ltrs">B</span><span className="mobile">irch</span></Text>
        </Link> 
      </HStack>

      {/* Desktop */}
      <Flex display={["none", "none", "flex", "flex"]} justifySelf={"flex-end"} marginLeft={"auto"} alignItems={"center"}>
        <Stack  direction={"row"} alignItems={"center"} spacing={7}>
          <Link as={ReachLink} to="/">
            Portfolio
          </Link>
          <Link as={ReachLink} to="/about-me">
            About me
          </Link>
          <Link as={ReachLink} to="/contact">
            Contact
          </Link>
          <Link as={ReachLink} to="/shop">
            Shop
          </Link>
        </Stack>
        <ColorModeSwitcher />
      </Flex>
    
      </HStack>
      {/* Mobile */}
     

      <Flex
        w="100vw"
        display={display}
        bgColor="#1a202c"
        opacity={"0.9"}
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

        <Flex flexDir="column" align="center" gap={3} h={"100%"}>
          <Link fontSize={32} as={ReachLink} to="/">
            Portfolio
          </Link>
          <Link fontSize={32}  as={ReachLink} to="/about-me">
            About me
          </Link>
         
          <Link fontSize={32}  as={ReachLink} to="/contact">
            Contact
          </Link>
          <Link fontSize={32}  as={ReachLink} to="/shop">
            Shop
          </Link>
          <HStack justifySelf={"flex-end"} gap={8} mt={"auto"} mb={8}>
            <Link href="https://www.tiktok.com/@blendedbirch"><Image boxSize="32px" src={colorMode === "light" ? tiktok : tiktokLt}/></Link>
            <Link href="https://www.instagram.com/blendedbirch/"><Image boxSize="32px" src={colorMode === "light" ? insta : instaLt}/></Link>
            <Link href="https://www.instagram.com/blendedbirch/"><Image boxSize="32px" src={colorMode === "light" ? artSt : artStLt}/></Link>
        </HStack>
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
     
      </Flex>
    </Flex>
  );
};
