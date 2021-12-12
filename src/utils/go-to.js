export const goTo = (event, path) => {
  event.preventDefault()
  pushUrl(path)
}

const pushUrl = (path) => {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new window.Event('popstate'))
}
