import React, { useState } from "react"
// import { ArrowUpIcon } from "@heroicons/react/solid"
import { isBrowser } from "../utils/helpers"

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  isBrowser() && window.addEventListener("scroll", toggleVisible)

  const visibleStyles = {
    pointerEvents: visible ? "auto" : "none",
    opacity: visible ? 1 : 0,
  }

  return (
    <button
      className="h-10 w-10 md:h-12 md:w-12 shadow-md bg-default fixed bottom-14 md:bottom-20 left-2 md:left-6 lg:left-10  text-white flex rounded-full items-center justify-center transition z-50"
      onClick={scrollToTop}
      style={visibleStyles}
    >
      {/* <ArrowUpIcon className="text-white h-7 w-7 md:h-8 md:w-8" /> */}
      Arrow Here
    </button>
  )
}
