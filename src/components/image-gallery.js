import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ImageGallery({ images }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {images.map((image, index) => (
        <div key={index} className="rounded-3xl overflow-hidden shadow-md">
          <GatsbyImage
            image={getImage(image)}
            imgStyle={{ borderRadius: "24px" }}
            alt=""
          />
        </div>
      ))}
    </div>
  )
}
