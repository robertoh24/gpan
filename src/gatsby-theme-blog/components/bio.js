/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Styled, css, Flex } from "theme-ui"
import BioContent from "./bio-content"

const Bio = () => {
  //const data = useStaticQuery(bioQueryy)
  // const {
  //   site: {
  //     siteMetadata: { author },
  //   },
  //   avatar,
  // } = data

  return (
    <></>
  )
}

// const bioQueryy = graphql`
//   query BioQuery {
//     site {
//       siteMetadata {
//         author
//       }
//     }
//     avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
//       childImageSharp {
//         fixed(width: 48, height: 48) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `

export default Bio
