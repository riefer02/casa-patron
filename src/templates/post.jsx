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
  MyOrderedList,
  MyListItem,
  MyButton,
} from "../utils/mdx-components"

import Layout from "../components/layout"
import Spacer from "../components/spacer"
import Seo from "../components/seo"

const shortcodes = { Link, Spacer } // Provide common components here

export default function PageTemplate({ data, children }) {
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
    <Layout>
      <div className="max-w-4xl mx-auto py-6">
        <h1 className="font-bold text-3xl leading-[1.3] lg:leading-[1.5] mb-2">
          {data.mdx.frontmatter.title}
        </h1>
        <div className="flex items-center justify-between">
          <div className="mb-2">{data.mdx.frontmatter.author}</div>
          <div>{data.mdx.frontmatter.date}</div>
        </div>
        <hr className="mb-2"></hr>
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
        author
        date(formatString: "MMMM DD, YYYY")
        description
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
