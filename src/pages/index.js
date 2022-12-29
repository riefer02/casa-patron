import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import JumboPanel from "../components/jumbo-panel"
import Paragraph from "../components/paragraph"
import Headline from "../components/headline"
import Spacer from "../components/spacer"

// import * as styles from "../components/index.module.css"

export default function IndexPage({
  data: {
    communityImg,
    exploreImg,
    inspireImg,
    phoneDemoImg,
    homeHeroImg,
    homeMobileHeroImg,
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

  return (
    <Layout
      heroContent={HomePageHeroContent}
      mobileHeroImg={homeMobileHeroImg}
      heroImg={homeHeroImg}
    >
      <div id="what-is-flockx-section"></div>
      <Spacer />
      <Spacer className="block sm:hidden" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center">
        <div className="col-span-6 order-2 lg:order-1">
          <div className="xl:ml-24 w-full flex lg:block items-center justify-center ">
            <GatsbyImage
              image={getImage(phoneDemoImg)}
              alt="A model of the new flockx mobile application."
            />
          </div>
        </div>
        <div className="col-span-6 mx-auto lg:pl-20 order-1 lg:order-2">
          <Headline
            headerText=""
            className="mb-4 lg:mb-10 lg:max-w-md xl:leading-[83px] text-center lg:text-left xl:text-[64px]"
            spanColor="#D965FE"
            postSpanText="What's flockx?"
          />
          <Paragraph
            paragraphText="flockx connects you to local communities through your favorite experiences, helping you to build friendships, and find events for your next adventure across the U.S."
            className="max-w-xl lg:max-w-full mx-auto text-center lg:text-left"
          />
          <Spacer className="lg:hidden" />
        </div>
      </div>
      <Spacer />
      <Spacer className="block md:hidden" />
      <JumboPanel content={jumboPanelOne} />
      <Spacer />
      <Spacer className="block md:hidden" />
      <JumboPanel content={jumboPanelTwo} imageSide="left" />
      <Spacer />
      <Spacer className="block md:hidden" />
      <JumboPanel content={jumboPanelThree} />
      <Spacer className="hidden sm:block md:hidden" />
      {/* Callout here */}
      <Spacer className="block md:hidden" />
      <Spacer />
    </Layout>
  )
}

function HomePageHeroContent() {
  const primaryHeaderStyles =
    "text-5xl lg:text-6xl xl:text-[72px] xl:leading-[77px] text-left font-light mb-2 xl:mx-0 text-white"

  return (
    <>
      <div className="-mt-[30%] sm:-mt-0">
        <h1 className="hidden">
          Let's Create Videos to Inspire Your Favorites Communities
        </h1>
        <a href="#what-is-flockx-section" className="mb-10 sm:mb-8 block">
          <div className={primaryHeaderStyles}>
            Let's
            <div className="inline-flex pl-2 sm:pl-3 lg:pl-4 overflow-hidden w-[53%] mx-auto">
              <div className="flex-col h-full relative inline-flex animate-spin-words">
                <span className="opacity-0 ">Create</span>
                <span className="absolute text-secondary-red">Create</span>
                <span className="absolute translate-y-[100%] overflow-hidden text-secondary-green">
                  Explore
                </span>
                <span className="absolute translate-y-[200%] text-secondary-blue">
                  Share
                </span>
                <span className="absolute translate-y-[300%] text-secondary-red">
                  Create
                </span>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className={primaryHeaderStyles}>Experiences With</div>
            <div className={primaryHeaderStyles}>Your Community.</div>
          </div>
          <div className="sm:hidden">
            <div className={primaryHeaderStyles}>Experiences</div>
            <div className={primaryHeaderStyles}>With Your</div>
            <div className={primaryHeaderStyles}>Community.</div>
          </div>
        </a>
        <p className="block sm:pt-0 font-light sm:text-lg md:text-xl lg:text-2xl text-white">
          Available in the US
        </p>
      </div>
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const Head = ({
  data: {
    site: {
      siteMetadata: { description, siteUrl },
    },
  },
}) => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Casa Patron",
    description:
      "Escape to the stunning mountains of Alto, NM and stay at Casa Patron, a beautiful short term vacation rental home located near Ruidoso. This family-friendly home is perfect for large parties and is conveniently located next to Ski Apache. Experience the beauty of nature and make unforgettable memories at Casa Patron.",
    image: "http://www.example.com/casa-patron/image.jpg",
    telephone: "+1-505-555-1212",
    email: "info@casapatron.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Alto",
      addressRegion: "NM",
      postalCode: "88312",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.684566,
      longitude: -105.743576,
    },
    url: "http://www.example.com/casa-patron/",
    sameAs: [
      "http://www.facebook.com/casapatron",
      "http://www.twitter.com/casapatron",
      "http://www.instagram.com/casapatron",
    ],
    amenityFeature: [
      "Free parking",
      "Free WiFi",
      "Outdoor pool",
      "Fitness center",
      "Air conditioning",
      "Hot tub",
      "Cable TV",
      "Kitchenette",
    ],
    lodgingUnit: [
      {
        "@type": "LodgingUnit",
        name: "One Bedroom Suite",
        description:
          "Our spacious one bedroom suite features a private bedroom with a king-size bed and a pull-out sofa in the living room. The fully equipped kitchenette and dining area make it easy to cook meals during your stay. The suite also has a private balcony with stunning mountain views.",
        image: "http://www.example.com/casa-patron/one-bedroom-suite.jpg",
        numberOfRooms: 1,
        occupancy: 4,
        bed: {
          "@type": "BedDetails",
          numberOfBeds: 1,
          typeOfBed: "King-size bed",
        },
        amenityFeature: [
          "Air conditioning",
          "Cable TV",
          "Free WiFi",
          "Private balcony",
          "Fully equipped kitchenette",
        ],
      },
      {
        "@type": "LodgingUnit",
        name: "Two Bedroom Suite",
        description:
          "Our spacious two bedroom suite features two private bedrooms, each with a queen-size bed, and a pull-out sofa in the living room. The fully equipped kitchen and dining area make it easy to cook meals during your stay. The suite also has a private balcony with stunning mountain views.",
      },
    ],
  }

  return (
    <Seo
      keywords={[
        "vacation rental",
        "new mexico",
        "alto",
        "ski apache",
        "ruidoso",
        "retreat",
        "casa patron",
      ]}
      description={description}
      schemaMarkup={schemaMarkup}
    />
  )
}

export const query = graphql`
  query IndexPageQuery {
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
    homeMobileHeroImg: file(name: { eq: "living-room-1" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
