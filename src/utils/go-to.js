const pushUrl = (path) => {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new window.Event('popstate'))
}

export const goTo = (path) => {
  pushUrl(path)
}
