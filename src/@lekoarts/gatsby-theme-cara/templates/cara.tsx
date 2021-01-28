import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"
import { Gallery } from "gatsby-theme-gallery";
import Nav from "../../../components/header"
const Cara = () => (
  <Layout>
    <Parallax pages={5}>
      <Nav offset={0} factor={1}></Nav>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2} />
      
      <About offset={3} factor={1} />
      <Contact offset={4} factor={1} />
      
    </Parallax>
   
  </Layout>
)

export default Cara
