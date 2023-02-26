import React, { useState } from "react"
import { useLocation } from "@gatsbyjs/reach-router"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import {
  MyH1,
  MyH2,
  MyH3,
  MyP,
  MyLink,
  MyList,
  MyOrderedList,
  MyListItem,
  MyButton,
} from "../utils/mdx-components"

import Spacer from "../components/spacer"
import Seo from "../components/seo"
import Footer from "../components/footer"
// import BackToTopButton from "../components/back-to-top-btn"
import Hamburger from "../components/hamburger"
import Logo from "../components/logo"

const shortcodes = { Link, Spacer } // Provide common components here

export default function DocsTemplate({
  data: { docs },
  children,
  bodyClasses = "",
}) {
  const [mobileNavActive, setMobileNavActive] = useState(false)
  const location = useLocation()
  const headerClasses = `relative z-30 bg-grey-neutral`
  const navLinkStyles =
    "px-3 py-2 rounded-md font-medium underline-offset-1 hover:underline text-white"

  const handleMobileMenuOnClick = () => {
    setMobileNavActive(!mobileNavActive)
  }

  const components = {
    h1: MyH1,
    h2: MyH2,
    h3: MyH3,
    p: MyP,
    a: MyLink,
    ul: MyList,
    ol: MyOrderedList,
    li: MyListItem,
    button: MyButton,
    ...shortcodes,
  }

  return (
    <div
      className={`${
        mobileNavActive ? "translate-x-[-60vw]" : ""
      } transition ease-linear h-full max-h-[100vh] flex sm:fixed`}
    >
      <div
        className={
          bodyClasses +
          " min-w-[100vw] min-h-screen flex flex-col h-full relative overflow-y-auto"
        }
      >
        <header className={headerClasses}>
          <nav
            className={`w-full z-40 bg-grey-neutral fixed sm:static transition ease-linear top-0 left-0`}
          >
            <div className="max-w-7xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                  <div className="flex-shrink-0 flex items-center mr-auto">
                    <Link to="/" className="w-[64px]">
                      <Logo />
                    </Link>
                  </div>
                  <div className="hidden sm:flex items-center sm:ml-6 text-white">
                    Casa Patron Information
                  </div>
                </div>
                <div className="sm:hidden inset-y-0 right-0 flex items-center ">
                  <Hamburger
                    toggle={mobileNavActive}
                    onClickHandler={handleMobileMenuOnClick}
                  />
                </div>
              </div>
            </div>
            <div className="hidden sm:block bg-secondary">
              <div className="hidden sm:flex items-center sm:ml-6">
                <div className="flex space-x-4 w-full items-center justify-center">
                  {docs.nodes.map((node, index) => (
                    <Link
                      key={index}
                      to={node.frontmatter.slug}
                      className={`${navLinkStyles} ${
                        index === docs.nodes.length - 1 ? "pr-0" : ""
                      }${
                        location.pathname === node.frontmatter.slug
                          ? "underline"
                          : ""
                      }`}
                      aria-current="page"
                    >
                      {node.frontmatter.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 z-20 relative flex-grow mt-12">
          <MDXProvider components={components}>{children}</MDXProvider>
        </main>
        <Footer />
      </div>
      <div
        onClick={handleMobileMenuOnClick}
        className={`h-[100vh] w-[60vw] min-w-[60vw] z-50 fixed right-0 translate-x-[60vw] transition ease-linear ml-auto bg-rose-500 block sm:hidden`}
      ></div>
    </div>
  )
}
export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    docs: allMdx(
      filter: { internal: { contentFilePath: { regex: "/docs/" } } }
    ) {
      nodes {
        id
        frontmatter {
          slug
          title
        }
      }
    }
  }
`

export const Head = ({
  data: {
    mdx: {
      frontmatter: { description, title },
    },
  },
}) => {
  return (
    <Seo
      title={title}
      keywords={[
        "leadership retreat",
        "new mexico",
        "alto",
        "ski apache",
        "ruidoso",
        "retreat",
        "casa patron",
      ]}
      description={description}
    />
  )
}
