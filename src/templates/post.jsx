import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data, children }) {
  const MyH1 = props => <h1 style={{ color: `tomato` }} {...props} />
  const MyParagraph = props => (
    <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
  )

  const components = {
    h1: MyH1,
    p: MyParagraph,
    ...shortcodes,
  }

  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={components}>{children}</MDXProvider>
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
