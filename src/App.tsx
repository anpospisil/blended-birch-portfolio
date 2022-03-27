import * as React from "react"
import {
  ChakraProvider,
  theme,
  
} from "@chakra-ui/react"
import {Navbar} from "./components/Navbar"

import { Home } from "./pages/Home"
import { AboutMe } from "./pages/AboutMe"
import { Router, RouteComponentProps } from "@reach/router";

export const App = () => (
  <ChakraProvider theme={theme}>
     <Navbar />
  <Router>
    <RouterPage path="/" pageComponent={<Home />} />
    <RouterPage path="/about-me" pageComponent={<AboutMe />} />
  </Router>
  </ChakraProvider>
)

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;