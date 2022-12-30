import React, { useRef, useEffect } from "react"
import Fade from "./fade"

export default function Hamburger({ onClickHandler, toggle }) {
  const buttonRef = useRef(null)

  useEffect(() => {
    if (buttonRef.current) {
      toggle ? buttonRef.current.focus() : buttonRef.current.blur()
    }
  }, [toggle])

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClickHandler}
      className="text-white inline-flex items-center justify-center py-2 rounded-md transition-all focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <Fade toggle={!toggle}>
        <svg
          className={`${toggle ? "hidden" : "block"} h-8 w-8`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Fade>
      <Fade toggle={toggle}>
        <svg
          className={`${toggle ? "block" : "hidden"} h-8 w-8`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Fade>
    </button>
  )
}
