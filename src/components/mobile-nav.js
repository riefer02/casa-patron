import React from "react"
import { useLocation } from "@reach/router"
import Fade from "./fade"
import { Link } from "gatsby"
import { useLockBodyScroll } from "../utils/hooks"

export default function MobileMenu({ toggle, navLinks, setMobileNavActive }) {
  const { pathname } = useLocation()
  useLockBodyScroll()

  const onClickHandler = linkUrl => {
    if (pathname === linkUrl)
      setMobileNavActive(
        setMobileNavActive(mobileNavActive => !mobileNavActive)
      )
  }

  return (
    <Fade toggle={toggle}>
      <div
        className="relative z-30 sm:hidden bg-gradient-to-tr h-[94vh]"
        id="mobile-menu"
      >
        <div className="p-10 h-full flex items-center align-center flex-col">
          {navLinks.map((navLink, index) => (
            <Link
              key={index}
              to={navLink.url}
              className="mb-3 px-3 py-5 text-2xl text-white shadow-lg bg-gray-100 rounded-[72.5px] min-w-[100%] text-center bg-gradient-to-tr to-default from-mi-purple bg-opacity-20"
              aria-current="page"
              onClick={() => onClickHandler(navLink.url)}
            >
              {navLink.label}
            </Link>
          ))}
        </div>
      </div>
    </Fade>
  )
}
