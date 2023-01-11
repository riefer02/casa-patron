import React, { useState } from "react"
import { isBrowser } from "../utils/helpers"
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp"

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
      className="h-8 w-8 shadow-md bg-secondary text-primary border-primary fixed bottom-14 md:bottom-20 left-2 md:left-6 lg:left-10 flex rounded-full items-center justify-center transition z-50"
      onClick={scrollToTop}
      style={visibleStyles}
    >
      <FaArrowUp className="text-xl" />
    </button>
  )
}
