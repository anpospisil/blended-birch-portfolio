import { Button, useColorModeValue } from "@chakra-ui/react";

export const SecondaryButton = (props) => {

  return(
    <Button
    onClick={props.onClick}
    bg={"transparent"}
    padding="1em 2em" 
       borderRadius="40px" 
       fontWeight="700" 
       letterSpacing="0.5px" 
       color={useColorModeValue("#007F68", "#fff")} 
       borderWidth={"2px"}
       borderColor={useColorModeValue("#007F68", "#fff")} 
       fontSize="16px"
       margin="0" 
       fontFamily="inherit" 
       transition="all 0.25s" 
       _hover={{
        opacity:"0.75"
    }}
    >{props.title}</Button>
 
);}