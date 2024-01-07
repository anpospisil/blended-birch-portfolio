import { useState } from "react";
import { Box, VStack, HStack, Heading, Input, Button, Text, Link} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import useScript from "./jotform";
import JotformEmbed from "react-jotform-embed";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  // const onSubmit = (data:any) => {
  //   console.log(data);
  //  };
  const [commision, setCommision] = useState(0);
  const [title, setTitle] = useState(1);
  function handleDisplay(x){
    setCommision(x)
    setTitle(0)
  }
  return (
    <Box>
       {title ? <Box>
          <Heading>What can I do for you?</Heading>
          <HStack pb={8}>
            <Button onClick={() => handleDisplay(1)}>
              I would like a commision
            </Button>
            <Button onClick={() => handleDisplay(0)}>I need something else</Button>
          </HStack>
        </Box>
      :
      <Box>{commision ? 
        <VStack>
        <Text>Please fillout the commision form below:</Text>
        <JotformEmbed src="https://form.jotform.com/221265818512050" />
        </VStack>
       : 
        <Text pb={12}>For all other inqueries, please email me directly at: <Link color={"#ff9437"}>blendedbirch@gmail.com</Link>.</Text>
      
      }</Box>}
    </Box>
  );
}
