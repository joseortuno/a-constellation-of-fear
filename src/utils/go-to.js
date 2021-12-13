const pushUrl = (path) => {
  window.location.href = path
  window.dispatchEvent(new window.Event('popstate'))
}

export const goTo = (path) => {
  pushUrl(path)
}
