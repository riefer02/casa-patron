import React from "react"

export default function Spacer({ sizeX = 2, sizeY = 2, className = "" }) {
  let xPadding = "",
    yPadding = ""

  if (sizeY === 2) {
    yPadding = "pt-10 sm:pt-20 md:pt-40 lg:pt-60"
  } else if (sizeY === 1) {
    yPadding = "pt-10 md:pt-20 lg:pt-32"
  } else if (sizeY === 3) {
    yPadding = "pt-20 md:pt-40 lg:pt-64"
  }

  return <div className={xPadding + " " + yPadding + " " + className}></div>
}
