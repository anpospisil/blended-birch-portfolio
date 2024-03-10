import * as React from "react"
import "./App.css"
import {
  ChakraProvider,
  Container,
theme,
extendTheme
  
} from "@chakra-ui/react"
import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"
import { Portfolio } from "./pages/Portfolio"
import { AboutMe } from "./pages/AboutMe"
import { ContactMe } from "./pages/ContactMe"
import { Shop } from "./pages/Shop"
import { Router, RouteComponentProps } from "@reach/router";


export const App = () => (
  <ChakraProvider theme={theme}>
     <Navbar />
     <Router primary={false}>
      <Portfolio path="/" />
      <AboutMe path="about-me" />
      <ContactMe path="contact" />
      <Shop path="shop" />
    </Router>
    <Footer />
    
  </ChakraProvider>
)

