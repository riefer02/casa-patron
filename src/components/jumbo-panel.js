import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Paragraph from "./typography/Paragraph"
import Headline from "./typography/Headline"
import Spacer from "./utility/Spacer"
import ExperienceVideo from "./quests/ExperienceVideo"

export default function JumboPanel({
  imageSide = "right",
  content,
  isTeamPage = false,
}) {
  const {
    image: { imageSrc, imageAlt },
    headline: { spanText, spanColor, headerText, headlineClassName },
    paragraph: { paragraphText, paragraphClassName },
    list,
    experienceID,
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
    const mediaContentWrapperStyles =
      imageSide === "right"
        ? `relative lg:col-span-6 justify-self-end mx-auto lg:mx-0 lg:-mr-80 lg:h-[696px]`
        : `relative order-2 lg:order-1 lg:mb-0 lg:col-span-6 mx-auto lg:mx-0 lg:-ml-96 lg:h-[696px]`

    const shadowImageWrapperStyles =
      imageSide === "right"
        ? `hidden lg:block absolute -top-8 -right-8 opacity-50 overflow-hidden rounded-3xl`
        : `hidden lg:block absolute -top-8 -left-8 opacity-50 overflow-hidden rounded-3xl`

    if (experienceID)
      return (
        <div className="order-2 lg:order-1 col-span-6 mx-auto lg:-mt-24">
          <ExperienceVideo questID={experienceID} />
        </div>
      )

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
          />
        </div>
      </div>
    )
  }

  if (imageSide === "right")
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        <div
          className={`mb-0 md:mb-10 lg:mb-0 lg:col-span-6 mx-auto lg:mx-0 ${
            isTeamPage ? "lg:-mt-28" : ""
          } ${experienceID ? "col-span-6" : ""}`}
        >
          {jumboContent()}
          <Spacer className="block lg:hidden" sizeY={3} />
        </div>
        {jumboMediaContent()}
      </div>
    )

  if (imageSide === "left")
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {jumboMediaContent()}
        <div
          className={`ml-auto lg:order-2 lg:col-span-6 mx-auto lg:mx-0 mb-0 md:mb-10 lg:mb-0 lg:pl-16 ${
            isTeamPage ? "lg:-mt-28 !max-w-full" : ""
          } ${experienceID ? "col-span-6" : ""}`}
        >
          {jumboContent()}
          <Spacer className="block lg:hidden" sizeY={3} />
        </div>
      </div>
    )
}
