import { useState } from "react";
import { Box, VStack, Stack, Heading, Input, Button, Text, Link} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import useScript from "./jotform";
import JotformEmbed from "react-jotform-embed";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
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
    <Box w={"100%"}>
       {title ? <Box display={"flex"} flexDirection={"column"}>
          <Heading>What can i do for you?</Heading>
          <Box pb={20} pt={8} m={6} display={"flex"} gap={4} flexDirection={["column", "column", "row", "row" ]} justifyContent={"center"}>
            <PrimaryButton onClick={() => handleDisplay(1)} title={"I would like a commision"} />
                      
            <SecondaryButton onClick={() => handleDisplay(0)} title={"I need something else"} />
           
          </Box>
        </Box>
      :
      <Box w={"100%"}>{commision ? 
               <JotformEmbed src="https://form.jotform.com/221212960317346" />
       : 
        <Text pb={12}>For all other inqueries, please email me directly at: <Link color={"#ff9437"}>blendedbirch@gmail.com</Link>.</Text>
      
      }</Box>}
    </Box>
  );
}
