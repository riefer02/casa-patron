import React from "react"
import { useTransition, animated, config } from "react-spring"

export default function FadeTransition({ children, toggle }) {
  const transitions = useTransition(toggle, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { ...config.default, duration: 200 },
  })

  return transitions(
    (styles, item) =>
      item && <animated.div style={styles}>{children}</animated.div>
  )
}
