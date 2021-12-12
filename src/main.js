
import { goTo } from './utils/go-to'
import { setSelectorLink, setSelectorSection, setSelectorResult, setSelectorFrame, setSelectorNav } from './utils/class-selector'
import { ACTIVE, NO_VIEW } from './constants/modifiers'
import { LINK, NAV, RESULT, SECTION } from './constants/blocks'
import { HOME, YAYOI_KUSAMA, NIGHT_OF_STARS, COLLECTION, RESULT_POINT_ONE, RESULT_POINT_TWO, RESULT_POINT_THREE, RESULT_POINT_FOUR, CONSTELLATION, POINT_ONE, POINT_TWO, POINT_THREE, POINT_FOUR, MENU, BACK, START } from './constants/elements'
import { removeLinkEffect, removeSectionEffect, removeResultEffect, addFrameEffect, removeFrameEffect, removeNavEffect, addNavEffect } from './utils/effects'
import '../style.css'

const $linkHome = setSelectorLink(HOME.selector)
const $linkYayoiKusama = setSelectorLink(YAYOI_KUSAMA.selector)
const $linNightOfStars = setSelectorLink(NIGHT_OF_STARS.selector)
const $linkCollection = setSelectorLink(COLLECTION.selector)

const $sectionYayoiKusama = setSelectorSection(YAYOI_KUSAMA.selector)
const $sectionNightOfStars = setSelectorSection(NIGHT_OF_STARS.selector)
const $sectionCollection = setSelectorSection(COLLECTION.selector)

const $resultPointOne = setSelectorResult(RESULT_POINT_ONE.selector)
const $resultPointTwo = setSelectorResult(RESULT_POINT_TWO.selector)
const $resultPointThree = setSelectorResult(RESULT_POINT_THREE.selector)
const $resultPointFour = setSelectorResult(RESULT_POINT_FOUR.selector)

const $navMenu = setSelectorNav(MENU.selector)
const $navBack = setSelectorNav(BACK.selector)
const $navStart = setSelectorNav(START.selector)

const $frameConstellation = setSelectorFrame(CONSTELLATION.selector)
const $framePointOne = setSelectorFrame(POINT_ONE.selector)
const $framePointTwo = setSelectorFrame(POINT_TWO.selector)
const $framePointThree = setSelectorFrame(POINT_THREE.selector)
const $framePointFour = setSelectorFrame(POINT_FOUR.selector)

;(function init () {
  $sectionYayoiKusama.classList.add(SECTION + YAYOI_KUSAMA.selector + NO_VIEW)
  $sectionNightOfStars.classList.add(SECTION + NIGHT_OF_STARS.selector + NO_VIEW)
  $sectionCollection.classList.add(SECTION + COLLECTION.selector + NO_VIEW)

  $resultPointOne.classList.add(RESULT + RESULT_POINT_ONE.selector + NO_VIEW)
  $resultPointTwo.classList.add(RESULT + RESULT_POINT_TWO.selector + NO_VIEW)
  $resultPointThree.classList.add(RESULT + RESULT_POINT_THREE.selector + NO_VIEW)
  $resultPointFour.classList.add(RESULT + RESULT_POINT_FOUR.selector + NO_VIEW)

  $navBack.classList.add(NAV + BACK.selector + NO_VIEW)
  $navStart.classList.add(NAV + START.selector + NO_VIEW)
})()

$linkYayoiKusama.addEventListener('click', (event) => goTo(event, YAYOI_KUSAMA.path))
$linNightOfStars.addEventListener('click', (event) => goTo(event, NIGHT_OF_STARS.path))
$linkCollection.addEventListener('click', (event) => goTo(event, COLLECTION.path))

$framePointOne.addEventListener('click', (event) => {
  goTo(event, RESULT_POINT_ONE.path)
})
$framePointTwo.addEventListener('click', (event) => goTo(event, RESULT_POINT_TWO.path))
$framePointThree.addEventListener('click', (event) => goTo(event, RESULT_POINT_THREE.path))
$framePointFour.addEventListener('click', (event) => goTo(event, RESULT_POINT_FOUR.path))

/** */

$linkHome.addEventListener('click', (event) => {
  goTo(event, HOME.path)
  addNavEffect($navBack, START.selector)
})

$navBack.addEventListener('click', () => {
  removeNavEffect($navBack, BACK.selector)
  addNavEffect($navMenu, MENU.selector)
})

$navStart.addEventListener('click', () => {
  removeNavEffect($navStart, START.selector)
  addNavEffect($navMenu, MENU.selector)
})

/** */

const isNotResult = () => {
  const { pathname } = window.location

  if (pathname.includes(RESULT_POINT_ONE.path)) return false
  if (pathname.includes(RESULT_POINT_TWO.path)) return false
  if (pathname.includes(RESULT_POINT_THREE.path)) return false
  if (pathname.includes(RESULT_POINT_FOUR.path)) return false
  return true
}

$frameConstellation.addEventListener('mouseenter', () => addFrameEffect($frameConstellation, CONSTELLATION.selector))
$frameConstellation.addEventListener('mouseout', () => {
  removeFrameEffect($frameConstellation, CONSTELLATION.selector)
})

$framePointOne.addEventListener('mouseenter', () => {
  addFrameEffect($frameConstellation, CONSTELLATION.selector)
  addFrameEffect($framePointOne, POINT_ONE.selector)
})
$framePointOne.addEventListener('mouseout', () => removeFrameEffect($framePointOne, POINT_ONE.selector))

$framePointTwo.addEventListener('mouseenter', () => {
  addFrameEffect($frameConstellation, CONSTELLATION.selector)
  addFrameEffect($framePointTwo, POINT_TWO.selector)
})
$framePointTwo.addEventListener('mouseout', () => removeFrameEffect($framePointTwo, POINT_TWO.selector))

$framePointThree.addEventListener('mouseenter', () => {
  addFrameEffect($frameConstellation, CONSTELLATION.selector)
  addFrameEffect($framePointThree, POINT_THREE.selector)
})
$framePointThree.addEventListener('mouseout', () => removeFrameEffect($framePointThree, POINT_THREE.selector))

$framePointFour.addEventListener('mouseenter', () => {
  addFrameEffect($frameConstellation, CONSTELLATION.selector)
  addFrameEffect($framePointFour, POINT_FOUR.selector)
})
$framePointFour.addEventListener('mouseout', () => removeFrameEffect($framePointFour, POINT_FOUR.selector))

/** */

const resetViewContent = () => {
  removeSectionEffect($sectionYayoiKusama, YAYOI_KUSAMA.selector)
  removeSectionEffect($sectionNightOfStars, NIGHT_OF_STARS.selector)
  removeSectionEffect($sectionCollection, COLLECTION.selector)

  removeResultEffect($resultPointOne, RESULT_POINT_ONE.selector)
  removeResultEffect($resultPointTwo, RESULT_POINT_TWO.selector)
  removeResultEffect($resultPointThree, RESULT_POINT_THREE.selector)
  removeResultEffect($resultPointFour, RESULT_POINT_FOUR.selector)
}

const resetViewUnderlineLinks = () => {
  removeLinkEffect($linkYayoiKusama, YAYOI_KUSAMA.selector)
  removeLinkEffect($linNightOfStars, NIGHT_OF_STARS.selector)
  removeLinkEffect($linkCollection, COLLECTION.selector)
}

const resetViewNav = () => {
  removeNavEffect($navMenu, MENU.selector)
  removeNavEffect($navBack, BACK.selector)
  removeNavEffect($navStart, START.selector)
}

const navigation = (block, element) => {
  resetViewContent()
  resetViewUnderlineLinks()
  resetViewNav()

  if (element !== HOME.selector && block === SECTION) {
    const $section = setSelectorSection(element)
    const $link = setSelectorLink(element)

    addNavEffect($navMenu, MENU.selector)

    $section.classList.remove(block + element + NO_VIEW)
    block === SECTION && $link.classList.add(LINK + element + ACTIVE)
  }
  if (element !== HOME.selector && block === RESULT) {
    const $result = setSelectorResult(element)
    const $frame = setSelectorFrame(element)

    addNavEffect($navBack, BACK.selector)
    addFrameEffect($frameConstellation, CONSTELLATION.selector)
    addFrameEffect($frame, element)

    $result.classList.remove(block + element + NO_VIEW)
  }
  if (element === HOME.selector) {
    addNavEffect($navStart, START.selector)
  }
}

const listener = () => {
  const { pathname } = window.location

  pathname.includes(HOME.path) && navigation(SECTION, HOME.selector)
  pathname.includes(YAYOI_KUSAMA.path) && navigation(SECTION, YAYOI_KUSAMA.selector)
  pathname.includes(NIGHT_OF_STARS.path) && navigation(SECTION, NIGHT_OF_STARS.selector)
  pathname.includes(COLLECTION.path) && navigation(SECTION, COLLECTION.selector)

  pathname.includes(RESULT_POINT_ONE.path) && navigation(RESULT, RESULT_POINT_ONE.selector)
  pathname.includes(RESULT_POINT_TWO.path) && navigation(RESULT, RESULT_POINT_TWO.selector)
  pathname.includes(RESULT_POINT_THREE.path) && navigation(RESULT, RESULT_POINT_THREE.selector)
  pathname.includes(RESULT_POINT_FOUR.path) && navigation(RESULT, RESULT_POINT_FOUR.selector)
}
listener()

window.addEventListener('popstate', listener)
