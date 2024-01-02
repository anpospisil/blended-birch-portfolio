import * as React from "react"
import "./App.css"
import {
  ChakraProvider,
  Container,
theme
  
} from "@chakra-ui/react"
import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"
import { Portfolio } from "./pages/Portfolio"
import { AboutMe } from "./pages/AboutMe"
import { ContactMe } from "./pages/ContactMe"
// import { Prints } from "./pages/Prints"
import { Router, RouteComponentProps } from "@reach/router";
import { extendTheme } from "@chakra-ui/react"


export const App = () => (
  <ChakraProvider theme={theme}>
     <Navbar />
     <Router primary={false}>
      <Portfolio path="/" />
      <AboutMe path="about-me" />
      <ContactMe path="contact" />
    </Router>
    <Footer />
    
  </ChakraProvider>
)

