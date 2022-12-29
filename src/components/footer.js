import React from "react"
import { Link } from "gatsby"

const footerNavigation = [
  {
    label: "Contact Us",
    url: "mailto:valerie@casapatronalto.com",
    externalLink: true,
    placeholder: false,
    id: "contact-us-button",
  },
]

function Footer() {
  const linkStyles = "hover:underline"

  return (
    <>
      <footer
        className="bg-transparent relative z-20"
        aria-labelledby="footer-heading"
      >
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-6 lg:px-8">
          <div className="grid gap-10 lg:gap-2 lg:flex justify-center items-center lg:justify-between w-full grid-flow-row  ">
            <div className="flex justify-center relative right-2 sm:right-0">
              <Link to="/">Logo Here</Link>
            </div>
            <div className="grid w-full items-center justify-center grid-cols-3 md:grid-cols-none md:max-w-lg lg:max-w-3xl md:auto-cols-auto md:grid-flow-col gap-6">
              {footerNavigation.map((item, index) => {
                if (item.placeholder)
                  return <div key={index} className="block md:hidden"></div>
                if (item.externalLink) {
                  return (
                    <a key={index} href={item.url} className={linkStyles}>
                      {item.label}
                    </a>
                  )
                } else {
                  return (
                    <Link to={item.url} className={linkStyles} key={index}>
                      {item.label}
                    </Link>
                  )
                }
              })}
            </div>
            <div>Socials Go Here</div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
