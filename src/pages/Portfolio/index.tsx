import {
    Box,
    Flex,
    Link,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react';

  export const Portfolio = () => (
   
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box>About Me</Box>
  
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                
           
              </Stack>
            </Flex>
          </Flex>
        </Box>
    );
