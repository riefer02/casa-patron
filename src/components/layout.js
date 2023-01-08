import React from "react"

import Header from "./header"
import Footer from "./footer"
import BackToTopButton from "./back-to-top-btn"

export default function Layout({
  children,
  bodyClasses,
  heroContent,
  heroImg,
  mobileHeroImg,
}) {
  return (
    <>
      <div className={bodyClasses + " relative overflow-hidden"}>
        <Header
          heroContent={heroContent}
          heroImg={heroImg}
          mobileHeroImg={mobileHeroImg}
        />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0 z-20 relative min-h-[85vh]">
          {children}
        </main>
        <Footer />
      </div>
      <div className="relative z-50">
        <BackToTopButton />
      </div>
    </>
  )
}
