import { useState } from "react";
import {
  Box,
  VStack,
  Grid,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";

export default function ContactForm() {
  // const [input, setInput] = useState('')

  // const handleInputChange = (e:any) => setInput(e.target.value)

  // const isError = input === ''
  return (
    <Box textAlign="center" fontSize="xl">
      <VStack spacing={6}>
        <FormControl isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" placeholder="name" />
        </FormControl>

        <FormControl
          //    isInvalid={isError}
          isRequired
        >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            //   onChange={handleInputChange} value={input}
          />
          {/* {!isError ? "" :
  <FormErrorMessage>Email is required.</FormErrorMessage>
        } */}
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="subject">Subject</FormLabel>
          <Input id="subject" placeholder="subject" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>

          <Textarea id="message" placeholder="message" size="sm" />
        </FormControl>
      </VStack>
    </Box>
  );
}
