import React from "react"

export default function Headline({
  headerText,
  className,
  spanText,
  spanColor = "#6A67FF",
  postSpanText,
}) {
  const styles =
    "text-3xl md:text-4xl lg:text-5xl text-light-grey font-light lg:leading-[62.5px]"

  return (
    <h3 className={styles + " " + className}>
      <span style={{ color: spanColor }}>{spanText}</span> {headerText}{" "}
      <span style={{ color: spanColor }}>{postSpanText}</span>
    </h3>
  )
}
