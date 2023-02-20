import React from "react"

export default function Paragraph({ paragraphText, className }) {
  const styles = "text-lg md:text-xl lg:text-2xl font-normal md:font-thin"

  return <p className={`${styles} ${className}`}>{paragraphText}</p>
}
