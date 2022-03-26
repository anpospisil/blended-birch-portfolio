import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from "../../ColorModeSwitcher"
import { Link as ReachLink } from "@reach/router"

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              
                <Link as={ReachLink} to='/home'>About me</Link>
                <Link as={ReachLink} to='/home'>Portfolio</Link>
            <ColorModeSwitcher justifySelf="flex-end" />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}