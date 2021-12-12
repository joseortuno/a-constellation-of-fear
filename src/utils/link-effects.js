import { LINK } from '../constants/blocks'
import { ACTIVE } from '../constants/modifiers'

export const removeLinkEffect = (element, selector) => {
  const isActive = element.classList.contains(LINK + selector + ACTIVE)
  isActive && element.classList.remove(LINK + selector + ACTIVE)
}
