import { useState } from "react";
import {
  Box,
  VStack,
  Input,
  Button
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import useScript from "./jotform"
import JotformEmbed from 'react-jotform-embed';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
 
  // const onSubmit = (data:any) => {
  //   console.log(data);
  //  };
 
  
  return (
    <JotformEmbed src="https://form.jotform.com/221265818512050" />
   
    // <Box w={[300, 400, 500]} textAlign="center" fontSize="xl">
    // <form action="https://public.herotofu.com/v1/4e3547b0-cee5-11ec-a821-6590c8b23a22" method="post">
    //   <VStack spacing={6} >
      
    //      <Input
    //        type="text"
    //        placeholder="First name"
    //        {...register("firstname", {
    //          required: "Please enter first name",
    //          minLength: 3,
    //          maxLength: 80
    //        })}
    //      />
    //      <Input
    //        type="text"
    //        placeholder="Last name"
    //        {...register("lastname", {
    //          required: "Please enter Last name",
    //          minLength: 3,
    //          maxLength: 100
    //        })}
    //      />
    //      <Input
    //        type="email"
    //        placeholder="email"
    //        {...register("email", {
    //          required: "Please enter email",
    //        })}
    //      />
    //      <Button
    //        borderRadius="md"
    //        bg="cyan.600"
    //        _hover={{ bg: "cyan.200" }}
    //        variant="ghost"
    //        type="submit"
    //      >
    //        Submit
    //      </Button>

    //   </VStack>
    //   </form>
    // </Box>
  );
}
