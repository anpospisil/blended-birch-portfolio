import * as React from "react"
import {
  ChakraProvider,
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
  <Router>
    <RouterPage path="/" pageComponent={<Portfolio />} />
    <RouterPage path="/about-me" pageComponent={<AboutMe />} />
    <RouterPage path="/contact" pageComponent={<ContactMe />} />
  </Router>
  </ChakraProvider>
)

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;