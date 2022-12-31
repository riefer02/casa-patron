import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import JumboPanel from "../components/jumbo-panel"
import Spacer from "../components/spacer"
import ImageGallery from "../components/image-gallery"

// import * as styles from "../components/index.module.css"

export default function IndexPage({
  data: {
    casaPatronBirdImg,
    terraceSummerImg,
    greatRoomImg,
    winterTerraceImg,
    homeHeroImg,
    mobileHeroImg,
    forestBeautyImg,
    blueBuildingImg,
    hotTubeImg,
    kitchenOneImg,
    kitchenTwoImg,
    valleyImg,
    gardenMonkImg,
    ladyInRuinsImg,
    terraceSummerGamesImg,
    bienvenidosImg,
  },
}) {
  const panels = [
    {
      image: {
        imageSrc: casaPatronBirdImg,
        imageAlt:
          "The Casa Patron mural, a black bird painted over a yellow background.",
      },
      headline: {
        spanText: "Experience",
        spanColor: "#7593FF",
        headerText: "New Mexico",
      },
      paragraph: {
        paragraphText:
          "Relax and unwind in the stunning Casa Patron cabin, located near Ski Apache in Alto, NM. Experience the magic of the mountains from the comfort of a high occupancy modern cabin.",
      },
    },
    {
      image: {
        imageSrc: terraceSummerImg,
        imageAlt: "People watching the sunset in a canyon.",
      },
      headline: {
        spanText: "Magic",
        spanColor: "#FF986C",
        headerText: "of the Mountains",
      },
      paragraph: {
        paragraphText:
          "Experience the beauty of nature at our vacation destination in Alto, NM. From wildflowers to pine forests, there's something for everyone to enjoy.",
      },
    },
    {
      image: {
        imageSrc: greatRoomImg,
        imageAlt: "People watching the sunset in a canyon.",
      },
      headline: {
        spanText: "Relax",
        spanColor: "#FF986C",
        headerText: "and Unwind",
      },
      paragraph: {
        paragraphText:
          "Gather with friends and family in our spacious great room, complete with plenty of seating and a top-of-the-line entertainment system. The perfect spot for movie nights or game nights.",
      },
    },
    {
      image: {
        imageSrc: winterTerraceImg,
        imageAlt: "A digital nomad at a concert taking photos.",
      },
      headline: {
        spanText: "Create",
        spanColor: "#FF7575",
        headerText: "Memories",
      },
      paragraph: {
        paragraphText:
          "Discover unforgettable experiences at our vacation destination. From breathtaking views to top-notch amenities, you'll create lasting memories here.",
      },
    },
  ]

  const imagesGallery = [
    terraceSummerGamesImg,
    blueBuildingImg,
    kitchenOneImg,
    ladyInRuinsImg,
    valleyImg,
    hotTubeImg,
    bienvenidosImg,
    gardenMonkImg,
    forestBeautyImg,
    kitchenTwoImg,
  ]

  return (
    <Layout
      heroContent={HomePageHeroContent}
      mobileHeroImg={mobileHeroImg}
      heroImg={homeHeroImg}
    >
      <div id="what-is-casa-patron"></div>
      {panels.map(content => (
        <>
          <Spacer />
          <Spacer className="block sm:hidden" />
          <JumboPanel content={content} imageSide="left" />
        </>
      ))}
      <Spacer className="hidden sm:block md:hidden" />
      {/* Callout here */}
      <Spacer />
      <Spacer className="block sm:hidden" />
      <ImageGallery images={imagesGallery} />
      <Spacer className="block md:hidden" />
      <Spacer />
    </Layout>
  )
}

function HomePageHeroContent() {
  const primaryHeaderStyles =
    "text-5xl md:text-6xl lg:text-6xl xl:text-[72px] xl:leading-[77px] text-left font-light mb-2 xl:mx-0 text-white"

  return (
    <>
      <div className="-mt-[30%] sm:-mt-0">
        <h1 className="hidden">
          Let's Create Videos to Inspire Your Favorites Communities
        </h1>
        <a href="#what-is-flockx-section" className="mb-3 sm:mb-4 block">
          <div className={primaryHeaderStyles}>
            Let's
            <div className="inline-flex pl-2 sm:pl-3 lg:pl-4 overflow-hidden w-[70%] mx-auto">
              <div className="flex-col h-full relative inline-flex animate-spin-words">
                <span className="opacity-0 ">Ski.</span>
                <span className="absolute text-secondary-red">Ski</span>
                <span className="absolute translate-y-[100%] overflow-hidden text-secondary-green">
                  Explore
                </span>
                <span className="absolute translate-y-[200%] text-secondary-blue">
                  Experience
                </span>
                <span className="absolute translate-y-[300%] text-secondary-red">
                  Ski
                </span>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className={primaryHeaderStyles}>Alto, New Mexico,</div>
            <div className={primaryHeaderStyles}>Casa Patron.</div>
          </div>
          <div className="sm:hidden">
            <div className={primaryHeaderStyles}>Alto, NM</div>
            <div className={primaryHeaderStyles}>Casa Patron</div>
            {/* <div className={primaryHeaderStyles}>Patron.</div> */}
          </div>
        </a>
        <p className="block sm:pt-0 font-light sm:text-lg md:text-xl lg:text-2xl text-white max-w-[250px] lg:max-w-xl">
          Short-term vacation rental, located near Ski Apache.
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
    casaPatronBirdImg: file(name: { eq: "cp-mural" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    terraceSummerImg: file(name: { eq: "cp-terrace-summer" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    greatRoomImg: file(name: { eq: "cp-great-room" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    winterTerraceImg: file(name: { eq: "cp-terrace-winter" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    blueBuildingImg: file(name: { eq: "cp-blue-building" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    forestBeautyImg: file(name: { eq: "cp-forest-beauty" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    hotTubeImg: file(name: { eq: "cp-hot-tube" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    kitchenOneImg: file(name: { eq: "cp-kitchen-1" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    kitchenTwoImg: file(name: { eq: "cp-kitchen-2" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    valleyImg: file(name: { eq: "cp-valley" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    gardenMonkImg: file(name: { eq: "cp-garden-monk" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    ladyInRuinsImg: file(name: { eq: "cp-lady-in-ruins" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    terraceSummerGamesImg: file(name: { eq: "cp-terrace-summer-games" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    bienvenidosImg: file(name: { eq: "cp-bienvenidos" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    homeHeroImg: file(name: { eq: "living-room-1" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    mobileHeroImg: file(name: { eq: "cp-terrace-beauty-winter" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
