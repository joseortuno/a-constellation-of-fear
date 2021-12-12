import { RESULT } from '../constants/blocks'
import { NO_VIEW } from '../constants/modifiers'

export const removeResultEffect = (element, selector) => {
  const isInactive = !element.classList.contains(RESULT + selector + NO_VIEW)
  isInactive && element.classList.add(RESULT + selector + NO_VIEW)
}
