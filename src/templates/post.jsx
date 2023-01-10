import React from "react"
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
  MyListItem,
  MyButton,
} from "../utils/mdx-components"

import Layout from "../components/layout"
import Spacer from "../components/spacer"

const shortcodes = { Link, Spacer } // Provide common components here

export default function PageTemplate({ data, children }) {
  const components = {
    h1: MyH1,
    h2: MyH2,
    h3: MyH3,
    p: MyP,
    a: MyLink,
    ul: MyList,
    li: MyListItem,
    button: MyButton,
    ...shortcodes,
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto bg-red-500">
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
