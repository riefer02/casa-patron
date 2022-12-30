import React from "react"

export default function Paragraph({ paragraphText, className }) {
  const styles = "sm:text-lg md:text-xl lg:text-2xl font-thin"

  return <p className={`${styles} ${className}`}>{paragraphText}</p>
}
