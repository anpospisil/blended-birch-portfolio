import * as React from "react"
import {
  ChakraProvider,
  Container,
  theme,
  
} from "@chakra-ui/react"
import {Navbar} from "./components/Navbar"

import { Portfolio } from "./pages/Portfolio"
import { AboutMe } from "./pages/AboutMe"
import { ContactMe } from "./pages/ContactMe"
import { Router, RouteComponentProps } from "@reach/router";

export const App = () => (
  <ChakraProvider theme={theme}>
     <Navbar />
     <Container as="main" maxWidth="100%">
  <Router >
    <RouterPage path="/" pageComponent={<Portfolio />} />
    <RouterPage path="/about-me" pageComponent={<AboutMe />} />
    <RouterPage path="/contact" pageComponent={<ContactMe />} />
  </Router>
  </Container>
  </ChakraProvider>
)

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;