import { SECTION } from '../constants/blocks'
import { NO_VIEW } from '../constants/modifiers'

export const addSectionEffect = (element, selector) => {
  const isInactive = !element.classList.contains(SECTION + selector + NO_VIEW)
  isInactive && element.classList.add(SECTION + selector + NO_VIEW)
}
