import { Box, Text, VStack, HStack, Grid, Image, Link, Heading, useColorMode } from "@chakra-ui/react";
import thanks from "../../images/please.png"
import right from "../../images/pointing-right.png"
import left from "../../images/pointing-left.png"
import insta from "../../images/instagram-dk.svg"
import tiktok from "../../images/tik-tok-dk.svg"
import artSt from "../../images/art-dk.svg"
import coffee from "../../images/coffee-dk.svg"
import patreon from "../../images/patreon-dk.svg"
import instaLt from "../../images/instagram-lt.svg"
import tiktokLt from "../../images/tik-tok-lt.svg"
import artStLt from "../../images/art-lt.svg"
import coffeeLt from "../../images/coffee-lt.svg"
import patreonLt from "../../images/patreon-lt.svg"
import heartLt from "../../images/heartLt.svg"
import heartDk from "../../images/heartDk.svg"



export const Socials = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return(
   <Grid minH="auto">
      <VStack className="social-links" alignItems={"flex-start"} spacing={8}>
        <VStack spacing={5} m={0} alignItems={"flex-start"}>
        <Heading className="heart-container" display={"flex"} gap={2} alignItems={["baseline", "baseline", "flex-end", "flex-end"]} fontSize={30} textAlign={"left"}>
         Support <Image  className="heart" w={[8, 8, 10, 10]} src={colorMode === "light" ? heartDk : heartLt} />
        </Heading>
        <VStack alignItems={"flex-start"} spacing='16px'>
        
  
            <Link display="flex" gap={2} alignItems={"flex-end"} href="https://www.tiktok.com/@blendedbirch"><Image boxSize="32px" src={colorMode === "light" ? patreon : patreonLt}/>Become a Patron </Link>
          
           <Link display="flex" gap={2} alignItems={"flex-end"} href="https://www.instagram.com/blendedbirch/"><Image boxSize="32px" src={colorMode === "light" ? coffee : coffeeLt}/>Buy me a coffee </Link>
           
        </VStack>


        </VStack>
        <VStack  alignItems={"flex-start"} spacing={5} m={0} >
        <Heading className="heart-container" display={"flex"} gap={2} alignItems={["baseline", "baseline", "flex-end", "flex-end"]} fontSize={30} >Follow <Image className="heart" w={[8, 8, 10, 10]} src={colorMode === "light" ? heartDk : heartLt} /></Heading>
        <HStack spacing='16px' >
            <Link href="https://www.tiktok.com/@blendedbirch"><Image boxSize="32px" src={colorMode === "light" ? tiktok : tiktokLt}/></Link>
            <Link href="https://www.instagram.com/blendedbirch/"><Image boxSize="32px" src={colorMode === "light" ? insta : instaLt}/></Link>
            <Link href="https://www.instagram.com/blendedbirch/"><Image boxSize="32px" src={colorMode === "light" ? artSt : artStLt}/></Link>
        </HStack>
        </VStack>
      </VStack>
    </Grid>
 
);}
