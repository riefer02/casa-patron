import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import MobileMenu from "./mobile-nav"
import Hamburger from "./hamburger"
import { isHeroPage } from "../utils/helpers"
import Logo from "../components/logo"

const navLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Activities",
    url: "/#activities",
  },
  {
    label: "Leadership Retreats",
    url: "/leadership-retreats",
  },
  {
    label: "Contact Us",
    url: "/contact-us",
  },
]

export default function NavBar({ mobileNavActive, setMobileNavActive }) {
  const { pathname } = useLocation()
  const navLinkStyles =
    "text-shadow px-3 py-2 rounded-md font-medium underline-offset-1 hover:underline text-white"

  const handleMobileMenuOnClick = () => {
    setMobileNavActive(!mobileNavActive)
  }

  return (
    <nav
      className={`absolute top-0 w-full z-40 ${
        isHeroPage(pathname) ? "md:bg-transparent" : "bg-grey-neutral"
      } ${mobileNavActive ? "bg-grey-neutral" : ""}`}
    >
      <div className="max-w-7xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-between h-16">
          <div className="sm:hidden absolute inset-y-0 right-0 flex items-center ">
            <Hamburger
              toggle={mobileNavActive}
              onClickHandler={handleMobileMenuOnClick}
            />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0 flex items-center mr-auto">
              <Link to="/" className="w-[64px]">
                <Logo />
              </Link>
            </div>
            <div className="hidden sm:flex items-center sm:ml-6">
              <div className="flex space-x-4">
                {navLinks.map((navLink, index) => {
                  if (navLink.externalLink)
                    return (
                      <a
                        key={index}
                        href={navLink.url}
                        className={`${navLinkStyles} ${
                          index === navLinks.length - 1 ? "pr-0" : ""
                        }`}
                        aria-current="page"
                      >
                        {navLink.label}
                      </a>
                    )

                  return (
                    <Link
                      key={index}
                      to={navLink.url}
                      className={`${navLinkStyles} ${
                        index === navLinks.length - 1 ? "pr-0" : ""
                      }`}
                      aria-current="page"
                    >
                      {navLink.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {mobileNavActive && (
        <MobileMenu
          toggle={mobileNavActive}
          navLinks={navLinks}
          setMobileNavActive={setMobileNavActive}
        />
      )}
    </nav>
  )
}
