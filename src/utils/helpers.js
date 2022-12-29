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
