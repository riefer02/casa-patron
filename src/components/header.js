import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import NavBar from "./navbar"
import { useLocation } from "@reach/router"
import { isHeroPage } from "../utils/helpers.js"

export default function Header({ heroContent, heroImg, mobileHeroImg }) {
  const { pathname } = useLocation()
  const [mobileNavActive, setMobileNavActive] = useState(false)
  const isHomePage = pathname === "/" ? true : false
  const headerClasses = `relative z-30 bg-black ${
    isHeroPage(pathname) ? "h-screen sm:h-[54vw]" : "h-16"
  }`

  return (
    <header className={headerClasses}>
      {isHomePage ? (
        <>
          {/* Desktop Video */}
          <div className="hidden sm:block absolute z-10 h-full w-full overflow-hidden">
            <video
              muted
              loop
              autoPlay
              preload="none"
              id="hero-video"
              className="hidden sm:block relative z-10 w-full"
            >
              <source
                src="https://storage.googleapis.com/fetchai-web-images/Fetch-AI-Mobile-App-Site/landing-page-v3.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          {/* Mobile Hero Image */}
          <div className="block sm:hidden absolute z-10 h-full w-full pt-0 overflow-hidden">
            <GatsbyImage
              image={getImage(mobileHeroImg)}
              style={{ height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
        </>
      ) : (
        /* Hero Image */
        <>
          {/* Desktop Hero Image */}
          <div className="absolute hidden sm:block z-10 h-full w-full pt-10 sm:pt-0 overflow-hidden">
            <GatsbyImage
              image={getImage(heroImg)}
              style={{ height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          {/* Mobile Hero Image */}
          <div className="block sm:hidden absolute z-10 h-full w-full pt-0 overflow-hidden">
            <GatsbyImage
              image={getImage(mobileHeroImg)}
              style={{ height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
        </>
      )}
      {/* Desktop Background Gradient */}
      {isHeroPage(pathname) && (
        <>
          <div className="hidden sm:block absolute z-20 h-full w-full">
            <div className="bg-header-gradient w-full h-full relative"></div>
            <div className="bg-header-gradient w-1/6 h-full absolute top-[-50%] right-0 rotate-[120deg]"></div>
          </div>
          {/* Mobile Background Gradient */}
          <div className="absolute sm:hidden z-20 top-0 bg-black opacity-50 h-full w-full"></div>
        </>
      )}

      {/* NavBar*/}
      <div className="relative z-40">
        <NavBar
          setMobileNavActive={setMobileNavActive}
          mobileNavActive={mobileNavActive}
        />
      </div>
      {/* Hero*/}
      {heroContent && (
        <div className="relative z-30 max-w-7xl mx-auto h-full px-4 sm:px-6 xl:px-0 sm:pt-0">
          <div className="sm:absolute mx-auto top-[35%] sm:top-[25%] w-full pt-[90%] sm:pt-0 py-10 sm:py-0 text-left">
            <div className="mx-auto">{heroContent()}</div>
          </div>
        </div>
      )}
    </header>
  )
}
