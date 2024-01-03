import { Box, Text, VStack, HStack, Grid, Image, Link } from "@chakra-ui/react";
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
export const Socials = () => (
  
    <Grid minH="auto" >
      <VStack alignItems={"center"} spacing={5}>
        <Text fontSize={30} fontFamily={"serif"} textAlign={"left"}>
         Support
        </Text>
        <VStack alignItems={"flex-start"} spacing='16px'>
          <HStack alignItems={"flex-end"} spacing='16px'>
           <Link href="https://www.instagram.com/blendedbirch/"><Image boxSize="32px" src={coffee}/></Link>
           <Link fontSize={[16, 16, 16, 18]} href="https://www.instagram.com/blendedbirch/">Buy me a coffee</Link>
           </HStack>
           <HStack alignItems={"flex-end"}  spacing='16px'>
       
            <Link href="https://www.tiktok.com/@blendedbirch"><Image boxSize="32px" src={patreon}/></Link>
            <Link fontSize={[16, 16, 16, 18]} href="https://www.instagram.com/blendedbirch/">Become a Patron </Link>
            </HStack>
        </VStack>
        <Text fontSize={30}  fontFamily={"serif"}>Follow</Text>
        <HStack spacing='16px' >
            <Link href="https://www.tiktok.com/@blendedbirch"><Image boxSize="32px" src={tiktok}/></Link>
            <Link href="https://www.instagram.com/blendedbirch/"><Image boxSize="32px" src={insta}/></Link>
            <Link href="https://www.instagram.com/blendedbirch/"><Image boxSize="32px" src={artSt}/></Link>
        </HStack>
      </VStack>
    </Grid>
 
);
