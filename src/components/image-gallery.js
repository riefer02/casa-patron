import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ImageGallery({ images }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10">
      {images.map(image => (
        <div className="rounded-3xl overflow-hidden">
          <GatsbyImage
            image={getImage(image)}
            imgStyle={{ borderRadius: "24px" }}
          />
        </div>
      ))}
    </div>
  )
}
