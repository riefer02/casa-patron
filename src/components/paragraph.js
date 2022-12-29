import React from "react"

export default function Paragraph({ paragraphText, className }) {
  const styles = "sm:text-lg md:text-xl lg:text-[24px] lg:leading-[31px]"

  return <p className={`${styles} ${className}`}>{paragraphText}</p>
}
