import * as React from "react"
import { graphql, Link } from "gatsby"

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
    blueBuildingImg,
    hotTubeImg,
    kitchenOneImg,
    kitchenTwoImg,
    valleyImg,
    gardenMonkImg,
    ladyInRuinsImg,
    terraceSummerGamesImg,
    bienvenidosImg,
    suiteChrisImg,
    alexSuiteImg,
    masterSuiteImg,
    mountainViewImg,
    whiteSandsImg,
    greatRoomOfficeImg,
    mountainAscentImg,
    greatRoomChairImg,
    birdCageNookImg,
    singleBunksImg,
    twinBunkImg,
    greatRoom2Img,
    mapImg,
    mountainView2Img,
    livingRoomBedImg,
    booksImg,
    forestBeautyImg,
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
        spanColor: "#1C68CB",
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
        imageAlt: "A view of the valley from the back patio.",
      },
      headline: {
        spanText: "Magic",
        spanColor: "#1C68CB",

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
        imageAlt:
          "A scene of the great room with furniture, pillows, games, and a tv.",
      },
      headline: {
        spanText: "Relax",
        spanColor: "#1C68CB",
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
        imageAlt: "The valley covered in snow on a winter day.",
      },
      headline: {
        spanText: "Create",
        spanColor: "#1C68CB",
        headerText: "Memories",
      },
      paragraph: {
        paragraphText:
          "Discover unforgettable experiences at our vacation destination. From breathtaking views to top-notch amenities, you'll create lasting memories here.",
      },
    },
  ]

  const imagesGallery = [
    [
      masterSuiteImg,
      mountainViewImg,
      blueBuildingImg,
      kitchenOneImg,
      greatRoomOfficeImg,
      valleyImg,
      suiteChrisImg,
      hotTubeImg,
      birdCageNookImg,
      mountainAscentImg,
      bienvenidosImg,
      kitchenTwoImg,
    ],
    [
      whiteSandsImg,
      greatRoomChairImg,
      ladyInRuinsImg,
      singleBunksImg,
      terraceSummerGamesImg,
      twinBunkImg,
      greatRoom2Img,
      mapImg,
      alexSuiteImg,
      livingRoomBedImg,
      // booksImg,
      gardenMonkImg,
      // forestBeautyImg,
      mountainView2Img,
    ],
  ]

  return (
    <Layout
      heroContent={HomePageHeroContent}
      mobileHeroImg={mobileHeroImg}
      heroImg={homeHeroImg}
    >
      <div id="what-is-casa-patron"></div>
      {panels.map((content, index) => (
        <div key={index}>
          <Spacer />
          <Spacer className="block sm:hidden" />
          <JumboPanel content={content} />
        </div>
      ))}
      <Spacer className="hidden sm:block md:hidden" />
      <Spacer />
      <Spacer className="block sm:hidden" />
      <ImageGallery images={imagesGallery[0]} />
      {/* <Spacer sizeY={1} />
      <Spacer className="block sm:hidden" /> */}
      <div className="py-5"></div>
      <div className="bg-grey-neutral text-primary py-4 rounded-3xl shadow-md border-2 border-primary border-opacity-80">
        <blockquote
          className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold !leading-[1.9] text-center mx-auto my-6 md:my-10 lg:my-12 px-6 md:px-8 lg:px-10 max-w-7xl"
          aria-label="Description of Casa Patron's cozy cabin"
        >
          <p className="mb-6">
            Unwind and recharge in nature. Casa Patron offers a serene and
            peaceful getaway from the hustle and bustle of daily life. With
            comfortable amenities and breathtaking views, you'll have everything
            you need to relax and rejuvenate.
          </p>
        </blockquote>
      </div>
      <div className="py-5"></div>

      <ImageGallery images={imagesGallery[1]} />
      <Spacer sizeY={1} />

      <div className="flex flex-col items-center justify-center py-8 sm:py-16 max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-10">
          Escape to Casa Patron
        </h2>
        <Link
          to="/contact-us/"
          aria-label="Book Now"
          className="bg-secondary transition hover:bg-tertiary text-white text-xl sm:text-3xl font-light rounded-full py-2 sm:py-3 px-6 sm:px-8 shadow-md hover:shadow-sm"
        >
          Book Now
        </Link>
      </div>
      <Spacer className="block md:hidden" />
      <Spacer sizeY={1} />
    </Layout>
  )
}

function HomePageHeroContent() {
  const primaryHeaderStyles =
    "text-shadow text-5xl md:text-6xl lg:text-6xl xl:text-[72px] xl:leading-[77px] text-left font-light mb-2 xl:mx-0 text-white"

  return (
    <>
      <div className="-mt-[30%] sm:-mt-0">
        <h1 className="hidden">
          Casa Patron: Short Term Vacation Rental Home in Alto, NM Near Ruidoso
          & Ski Apache
        </h1>
        <a href="#what-is-casa-patron" className="mb-3 sm:mb-4 block">
          <div className={primaryHeaderStyles}>
            Let's
            <div className="inline-flex pl-2 sm:pl-3 lg:pl-4 overflow-hidden w-[70%] mx-auto">
              <div className="flex-col h-full relative inline-flex animate-spin-words">
                <span className="opacity-0 text-primary">Ski.</span>
                <span className="absolute text-secondary-red text-primary">
                  Ski
                </span>
                <span className="absolute translate-y-[100%] overflow-hidden text-secondary-green text-success">
                  Explore
                </span>
                <span className="absolute translate-y-[200%] text-secondary-blue text-tertiary">
                  Experience
                </span>
                <span className="absolute translate-y-[300%] text-secondary-red text-primary">
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
        <p className="text-shadow block sm:pt-0 font-light sm:text-lg md:text-xl lg:text-2xl text-white max-w-[250px] lg:max-w-sm">
          Short-term vacation rental, located near Ruidoso & Ski Apache.
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
    image: "https://casapatronalto.com/cp-mural.jpg",
    telephone: "+1-817-223-0272",
    email: "valerie@casapatronalto.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "176 Neill Rd",
      addressLocality: "Alto",
      addressRegion: "NM",
      postalCode: "88312",
      addressCountry: "US",
    },
    priceRange: "$240-$900 per night",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.41047791700064,
      longitude: -105.6845322600749,
    },
    url: "https://casapatronalto.com/",
    sameAs: ["http://www.instagram.com/casapatronalto"],
    amenityFeature: [
      "Free parking",
      "Free WiFi",
      "Great room",
      "Ski closet",
      "Air conditioning",
      "Hot tub",
      "Cable TV",
      "Kitchen",
      "Summer games",
      "Patio",
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
    suiteChrisImg: file(name: { eq: "cp-chris-suite" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    alexSuiteImg: file(name: { eq: "cp-alex-suite" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    masterSuiteImg: file(name: { eq: "cp-master-suite-2" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    mountainViewImg: file(name: { eq: "cp-mountain-view" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    whiteSandsImg: file(name: { eq: "cp-white-sands" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    greatRoomOfficeImg: file(name: { eq: "cp-great-room-office" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    mountainAscentImg: file(name: { eq: "cp-mountain-ascent" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    greatRoomChairImg: file(name: { eq: "cp-great-room-chair" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    birdCageNookImg: file(name: { eq: "cp-bird-cage-nook" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    singleBunksImg: file(name: { eq: "cp-single-bunks" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    twinBunkImg: file(name: { eq: "cp-twin-bunk" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    greatRoom2Img: file(name: { eq: "cp-great-room-2" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    mapImg: file(name: { eq: "cp-mountain-map" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    mountainView2Img: file(name: { eq: "cp-mountain-view-2" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    livingRoomBedImg: file(name: { eq: "cp-living-room-bed" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    booksImg: file(name: { eq: "cp-books-bw" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
