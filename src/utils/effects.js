import { LINK, RESULT, SECTION, FRAME, NAV } from '../constants/blocks'
import { ACTIVE, NO_VIEW } from '../constants/modifiers'

export const removeLinkEffect = (element, selector) => {
  const isActive = element.classList.contains(LINK + selector + ACTIVE)
  isActive && element.classList.remove(LINK + selector + ACTIVE)
}

export const removeResultEffect = (element, selector) => {
  const isInactive = !element.classList.contains(RESULT + selector + NO_VIEW)
  isInactive && element.classList.add(RESULT + selector + NO_VIEW)
}

export const removeSectionEffect = (element, selector) => {
  const isInactive = !element.classList.contains(SECTION + selector + NO_VIEW)
  isInactive && element.classList.add(SECTION + selector + NO_VIEW)
}

export const addFrameEffect = (element, selector) => {
  const isInactive = !element.classList.contains(FRAME + selector + ACTIVE)
  isInactive && element.classList.add(FRAME + selector + ACTIVE)
}

export const removeFrameEffect = (element, selector) => {
  const isActive = element.classList.contains(FRAME + selector + ACTIVE)
  isActive && element.classList.remove(FRAME + selector + ACTIVE)
}

export const removeNavEffect = (element, selector) => {
  const isInactive = !element.classList.contains(NAV + selector + NO_VIEW)
  isInactive && element.classList.add(NAV + selector + NO_VIEW)
}

export const addNavEffect = (element, selector) => {
  const isActive = element.classList.contains(NAV + selector + NO_VIEW)
  isActive && element.classList.remove(NAV + selector + NO_VIEW)
}
