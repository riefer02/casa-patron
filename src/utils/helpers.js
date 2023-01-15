export const isHeroPage = pathname => {
  switch (pathname) {
    case "/":
      return true
    case "/retreat":
      return true
    default:
      return false
  }
}

export const isBrowser = () => typeof window !== "undefined"

export const camelToTitleCase = string => {
  const result = string.replace(/([A-Z])/g, " $1")
  return result.charAt(0).toUpperCase() + result.slice(1)
}
