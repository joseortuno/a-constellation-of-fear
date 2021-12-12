import { FRAME } from '../constants/blocks'
import { ACTIVE } from '../constants/modifiers'

export const addFrameEffect = (element, selector) => {
  const isInactive = !element.classList.contains(FRAME + selector + ACTIVE)
  isInactive && element.classList.add(FRAME + selector + ACTIVE)
}

export const removeFrameEffect = (element, selector) => {
  const isActive = element.classList.contains(FRAME + selector + ACTIVE)
  isActive && element.classList.remove(FRAME + selector + ACTIVE)
}
