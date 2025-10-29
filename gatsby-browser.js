import "./src/styles/global.css"

export const shouldUpdateScroll = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  return false
}
