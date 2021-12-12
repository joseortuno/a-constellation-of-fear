import { FRAME, LINK, RESULT, SECTION, NAV } from '../constants/blocks'

const $classSelector = (selector) => document.querySelector('.' + selector)

export const setSelectorLink = (selector) => $classSelector(LINK + selector)
export const setSelectorSection = (selector) => $classSelector(SECTION + selector)
export const setSelectorResult = (selector) => $classSelector(RESULT + selector)
export const setSelectorFrame = (selector) => $classSelector(FRAME + selector)
export const setSelectorNav = (selector) => $classSelector(NAV + selector)
