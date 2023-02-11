import { useLayoutEffect, useState, useEffect } from "react"

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden"
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle)
  }, []) // Empty array ensures effect is only run on mount and unmount
}

export const useUserAgent = () => {
  const [userAgent, setUserAgent] = useState(null)
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    if (navigator) {
      setUserAgent(navigator.userAgent)

      // Check if user is using a mobile device
      const mobileRegex = /(android|iphone|ipad|mobile)/i
      setIsMobile(mobileRegex.test(navigator.userAgent))
    }
  }, [])

  return { userAgent, isMobile }
}
