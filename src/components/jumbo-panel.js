import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Paragraph from "./paragraph"
import Headline from "./headline"

export default function JumboPanel({ content }) {
  const {
    image: { imageSrc, imageAlt },
    headline: { spanText, spanColor, headerText, headlineClassName },
    paragraph: { paragraphText, paragraphClassName },
    list,
  } = content

  const listStyles = "flex flex-col gap-12 lg:gap-16"
  const listHeaderStyles =
    "mb-8 text-3xl md:text-4xl xl:text-[64px] font-light xl:leading-[83.33px]"
  const featureHeaderStyles =
    "text-xl xl:text-2xl text-light-grey-100 font-medium capitalize"
  const listItemParagraphStyles =
    "mt-2 text-base md:!text-base lg:!text-[18px] xl:!text-lg text-grey-50"

  let listElement

  if (list) {
    listElement = () => (
      <div className="relative lg:-top-20 max-w-lg">
        <h3 className={listHeaderStyles}>
          <span style={{ color: list.headerColor }}>{list.name}</span>
        </h3>
        <ul className={listStyles}>
          {list.listContent.map(feature => (
            <li key={feature.name}>
              <h4 className={featureHeaderStyles}>{feature.name}</h4>
              <Paragraph
                paragraphText={feature.description}
                className={listItemParagraphStyles}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  let jumboContent = () => {
    if (list && Object.keys(list).length > 0) return listElement()

    return (
      <>
        <Headline
          spanText={spanText}
          spanColor={spanColor}
          headerText={headerText}
          className={headlineClassName}
        />
        <Paragraph
          paragraphText={paragraphText}
          className={paragraphClassName}
        />
      </>
    )
  }

  let jumboMediaContent = () => {
    const mediaContentWrapperStyles = `shadow-md rounded-3xl relative order-2 lg:order-1 lg:mb-0 lg:col-span-6 mx-auto lg:mx-0 max-w-2xl mx-auto`

    const shadowImageWrapperStyles = `hidden lg:block absolute -top-6 -left-6 opacity-50 overflow-hidden rounded-3xl w-full`

    return (
      <div className={mediaContentWrapperStyles}>
        <div className={shadowImageWrapperStyles}>
          <GatsbyImage
            image={getImage(imageSrc)}
            alt={imageAlt}
            imgClassName="shadow-md"
            className="rounded-3xl"
          />
        </div>
        <div className="overflow-hidden rounded-3xl">
          <GatsbyImage
            image={getImage(imageSrc)}
            alt={imageAlt}
            imgClassName="shadow-md"
            className="rounded-3xl"
            imgStyle={{ borderRadius: "24px", overflow: "hidden" }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
      {jumboMediaContent()}
      <div
        className={`ml-auto lg:order-2 lg:col-span-6 mx-auto lg:mx-0 mb-0 md:mb-10 lg:mb-0 flex items-start justify-center flex-col px-4 md:px-14`}
      >
        {jumboContent()}
      </div>
    </div>
  )
}
