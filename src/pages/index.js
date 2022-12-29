import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../components/index.module.css"

export default function IndexPage({
  data: {
    communityImg,
    exploreImg,
    inspireImg,
    phoneDemoImg,
    homeHeroImg,
    flocksLogoPurple,
    homeMobileHeroImg,
    site: {
      siteMetadata: { description, siteUrl },
    },
  },
}) {
  const jumboPanelOne = {
    image: {
      imageSrc: communityImg,
      imageAlt: "People playing basketball in a commmunity",
    },
    headline: {
      spanText: "Connecting",
      spanColor: "#7593FF",
      headerText: "Communities",
      headlineClassName: "mb-4 text-center lg:text-left",
    },
    paragraph: {
      paragraphText:
        "Be your authentic self and meet like-minded people through local groups and events in your hometown or while traveling.",
      paragraphClassName: "max-w-xl text-center lg:text-left text-grey-100",
    },
  }

  const jumboPanelTwo = {
    image: {
      imageSrc: exploreImg,
      imageAlt: "People watching the sunset in a canyon.",
    },
    headline: {
      spanText: "Explore",
      spanColor: "#FF986C",
      headerText: "New Places",
      headlineClassName: "mb-4 text-center lg:text-left",
    },
    paragraph: {
      paragraphText:
        "Discover new places and hidden locations through short videos from hobbyists, adventurers, and thrill-seekers who know their area best.",
      paragraphClassName:
        "max-w-lg xl:max-w-[600px] text-center lg:text-left xl:-mr-8 text-grey-100",
    },
  }

  const jumboPanelThree = {
    image: {
      imageSrc: inspireImg,
      imageAlt: "A digital nomad at a concert taking photos.",
    },
    headline: {
      spanText: "Experiences",
      spanColor: "#FF7575",
      headerText: "that Inspire",
      headlineClassName: "mb-4 text-center lg:text-left",
    },
    paragraph: {
      paragraphText:
        "Capture your favorite experiences and get inspired by interacting with real world events and communities.",
      paragraphClassName:
        "max-w-xl xl:max-w-[500px] text-center lg:text-left text-grey-100",
    },
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "flockx",
    description,
    url: siteUrl,
    logo: "https://res.cloudinary.com/fetch-ai/image/upload/v1669748935/flockx-website/Logos/flockx-logo-white.svg",
    image:
      "https://res.cloudinary.com/fetch-ai/image/upload/v1669748935/flockx-website/Logos/flockx-logo-white.svg",
    sameAs: [
      "https://twitter.com/flockxofficial",
      "https://flockx.io",
      "https://www.linkedin.com/company/flockxofficial/",
    ],
    keywords: [
      "experiences",
      "mobile app",
      "events",
      "community",
      "flockx",
    ].toString(),
    founder: "Humayun Sheikh",
    slogan: "Find Your Flock",
  }

  return <Layout>Casa Patron Here</Layout>
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
        siteUrl
      }
    }
    communityImg: file(name: { eq: "living-room-1" }) {
      childImageSharp {
        gatsbyImageData(width: 889)
      }
    }
    exploreImg: file(name: { eq: "living-room-1" }) {
      childImageSharp {
        gatsbyImageData(width: 889)
      }
    }
    inspireImg: file(name: { eq: "living-room-1" }) {
      childImageSharp {
        gatsbyImageData(width: 889)
      }
    }
    phoneDemoImg: file(name: { eq: "living-room-1" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, width: 445)
      }
    }
    homeHeroImg: file(name: { eq: "living-room-1" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    flocksLogoPurple: file(name: { eq: "living-room-1" }) {
      childImageSharp {
        gatsbyImageData(width: 318, quality: 100)
      }
    }
    homeMobileHeroImg: file(name: { eq: "living-room-1" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
