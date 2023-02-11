import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Logo({ color }) {
  const query = graphql`
    query LogoQuery {
      whiteLogo: file(name: { eq: "cp-bird-logo-white" }) {
        publicURL
      }
      greyLogo: file(name: { eq: "cp-bird-logo-grey-blue" }) {
        publicURL
      }
    }
  `

  const { whiteLogo, greyLogo } = useStaticQuery(query)

  if (color === "grey-blue") {
    return (
      <img
        src={greyLogo.publicURL}
        alt="Casa Patron bird with flower logo"
        className="logo-shadow"
      />
    )
  }

  return (
    <img
      src={whiteLogo.publicURL}
      alt="Casa Patron bird with flower logo"
      className="logo-shadow"
    />
  )
}
