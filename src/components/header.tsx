/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import { NavLink, Flex } from 'theme-ui'

// @ts-ignore
import ProjectsMDX from "@lekoarts/gatsby-theme-cara/src/sections/projects"

const Nav = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />

<Flex as='nav'>
  
  <NavLink href='/blog' p={1}>
    Blog
  </NavLink>
  <NavLink href='/galleria' p={1}>
    Galleria
  </NavLink>
</Flex>
    
        
      
 
   
    <Divider speed={0.1} offset={offset} factor={factor}>
     
    </Divider>
  </div>
)

export default Nav
