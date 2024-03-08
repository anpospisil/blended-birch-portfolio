import { Button, useColorModeValue } from "@chakra-ui/react";


export const PrimaryButton = (props) => {
 
  return(
 <Button
 onClick={props.onClick}
 bg={useColorModeValue("#007f68", "#eafff4")}
 padding="1em 2em" 
    borderRadius="40px" 
    fontWeight="700" 
    letterSpacing="0.5px" 
    color={useColorModeValue("#fff", "#007F68")} 
    fontSize="16px"
    margin="0" 
    fontFamily="inherit" 
    transition="all 0.25s"
    _hover={{
        opacity:"0.75"
    }}
 >{props.title}</Button>
 
)}
