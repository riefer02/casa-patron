import React from "react"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import logo from "../images/gatsby-icon.png"

function SEO({
  description,
  lang,
  keywords,
  title,
  article,
  customSeoImage,
  schemaMarkup,
  noIndex,
}) {
  const { pathname } = useLocation()
  const {
    site: {
      siteMetadata: {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        twitterAccount,
      },
    },
    ogImage,
  } = useStaticQuery(query)

  const seoImage = customSeoImage ? getImage(customSeoImage) : getImage(ogImage)

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image:
      `${siteUrl}${seoImage.images.fallback.src}` ||
      seoImage.images.fallback.src ||
      logo,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <>
      <title>{title ? `${title} | ${titleTemplate}` : defaultTitle}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={keywords} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.title && <meta property="og:title" content={seo.title} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterAccount} />
      {twitterAccount && (
        <meta name="twitter:creator" content={twitterAccount} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {seo.image && <meta name="twitter:image:src" content={seo.image} />}

      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}

      {noIndex && <meta name="robots" content="noindex"></meta>}
    </>
  )
}

const query = graphql`
  query seoQuery {
    site {
      siteMetadata {
        defaultDescription: description
        siteUrl
        defaultTitle: title
        titleTemplate
        author
      }
    }
    ogImage: file(name: { eq: "example" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default SEO
