import { goTo } from './utils/go-to'
import { setSelectorLink, setSelectorSection, setSelectorResult, setSelectorFrame, setSelectorNav } from './utils/class-selector'
import { ACTIVE, NO_VIEW } from './constants/modifiers'
import { LINK, NAV, RESULT, SECTION } from './constants/blocks'
import { HOME, YAYOI_KUSAMA, NIGHT_OF_STARS, COLLECTION, RESULT_POINT_ONE, RESULT_POINT_TWO, RESULT_POINT_THREE, RESULT_POINT_FOUR, CONSTELLATION, POINT_ONE, POINT_TWO, POINT_THREE, POINT_FOUR, MENU, BACK, START } from './constants/elements'
import { removeLinkEffect, removeSectionEffect, removeResultEffect, addFrameEffect, removeFrameEffect, removeNavEffect, addNavEffect } from './utils/effects'
import './style.css'

// const $linkHome = setSelectorLink(HOME.selector)
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

$linkYayoiKusama.addEventListener('click', (event) => {
  event.preventDefault()
  goTo(YAYOI_KUSAMA.path)
})
$linNightOfStars.addEventListener('click', (event) => {
  event.preventDefault()
  goTo(NIGHT_OF_STARS.path)
})
$linkCollection.addEventListener('click', (event) => {
  event.preventDefault()
  goTo(COLLECTION.path)
})
$framePointOne.addEventListener('click', (event) => {
  event.preventDefault()
  goTo(RESULT_POINT_ONE.path)
})
$framePointTwo.addEventListener('click', (event) => {
  event.preventDefault()
  goTo(RESULT_POINT_TWO.path)
})
$framePointThree.addEventListener('click', (event) => {
  event.preventDefault()
  goTo(RESULT_POINT_THREE.path)
})
$framePointFour.addEventListener('click', (event) => {
  event.preventDefault()
  goTo(RESULT_POINT_FOUR.path)
})

/** */

// $linkHome.addEventListener('click', (event) => {
//   event.preventDefault()

//   goTo(HOME.path)
//   addNavEffect($navBack, START.selector)
// })

$navBack.addEventListener('click', () => {
  removeNavEffect($navBack, BACK.selector)
  addNavEffect($navMenu, MENU.selector)
})

$navStart.addEventListener('click', () => {
  removeNavEffect($navStart, START.selector)
  addNavEffect($navMenu, MENU.selector)
})

/** */

const isActive = (resultPathname) => {
  const { pathname } = window.location
  return pathname.includes(resultPathname)
}

const isResult = () => {
  const { pathname } = window.location

  const resultsPath = [
    RESULT_POINT_ONE.path,
    RESULT_POINT_TWO.path,
    RESULT_POINT_THREE.path,
    RESULT_POINT_FOUR.path
  ]
  const paths = pathname.split('/')

  return resultsPath.includes(paths[2])
}

/** */

$frameConstellation.addEventListener('mouseenter', () => {
  console.log(isResult())
  !isResult() && addFrameEffect($frameConstellation, CONSTELLATION.selector)
})
$frameConstellation.addEventListener('mouseout', () => {
  console.log(isResult())
  !isResult() && removeFrameEffect($frameConstellation, CONSTELLATION.selector)
})

$framePointOne.addEventListener('mouseenter', () => {
  !isActive(RESULT_POINT_ONE.path) && addFrameEffect($frameConstellation, CONSTELLATION.selector)
  !isActive(RESULT_POINT_ONE.path) && addFrameEffect($framePointOne, POINT_ONE.selector)
})
$framePointOne.addEventListener('mouseout', () => {
  !isActive(RESULT_POINT_ONE.path) && removeFrameEffect($framePointOne, POINT_ONE.selector)
})

$framePointTwo.addEventListener('mouseenter', () => {
  !isActive(RESULT_POINT_TWO.path) && addFrameEffect($frameConstellation, CONSTELLATION.selector)
  !isActive(RESULT_POINT_TWO.path) && addFrameEffect($framePointTwo, POINT_TWO.selector)
})
$framePointTwo.addEventListener('mouseout', () => {
  !isActive(RESULT_POINT_TWO.path) && removeFrameEffect($framePointTwo, POINT_TWO.selector)
})

$framePointThree.addEventListener('mouseenter', () => {
  !isActive(RESULT_POINT_THREE.path) && addFrameEffect($frameConstellation, CONSTELLATION.selector)
  !isActive(RESULT_POINT_THREE.path) && addFrameEffect($framePointThree, POINT_THREE.selector)
})
$framePointThree.addEventListener('mouseout', () => {
  !isActive(RESULT_POINT_THREE.path) && removeFrameEffect($framePointThree, POINT_THREE.selector)
})

$framePointFour.addEventListener('mouseenter', () => {
  !isActive(RESULT_POINT_FOUR.path) && addFrameEffect($frameConstellation, CONSTELLATION.selector)
  !isActive(RESULT_POINT_FOUR.path) && addFrameEffect($framePointFour, POINT_FOUR.selector)
})
$framePointFour.addEventListener('mouseout', () => {
  !isActive(RESULT_POINT_FOUR.path) && removeFrameEffect($framePointFour, POINT_FOUR.selector)
})

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

const resetViewFrame = () => {
  removeFrameEffect($framePointOne, POINT_ONE.selector)
  removeFrameEffect($framePointTwo, POINT_TWO.selector)
  removeFrameEffect($framePointThree, POINT_THREE.selector)
  removeFrameEffect($framePointFour, POINT_FOUR.selector)
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

const resetAllView = () => {
  resetViewContent()
  resetViewUnderlineLinks()
  resetViewNav()
  resetViewFrame()
}

/** */

const goToSections = (selector) => {
  resetAllView()

  const $section = setSelectorSection(selector)
  const $link = setSelectorLink(selector)

  addNavEffect($navMenu, MENU.selector)
  removeFrameEffect($frameConstellation, CONSTELLATION.selector)

  $section.classList.remove(SECTION + selector + NO_VIEW)
  SECTION && $link.classList.add(LINK + selector + ACTIVE)
}

const goToResults = (selector) => {
  resetAllView()

  const $result = setSelectorResult(selector)
  const $frame = setSelectorFrame(selector)

  addNavEffect($navBack, BACK.selector)
  addFrameEffect($frameConstellation, CONSTELLATION.selector)
  addFrameEffect($frame, selector)

  $result.classList.remove(RESULT + selector + NO_VIEW)
}

const goToHome = () => {
  resetAllView()

  addNavEffect($navStart, START.selector)
}

const listener = () => {
  const { pathname } = window.location

  pathname.includes(HOME.path) && goToHome()

  if (pathname.includes(YAYOI_KUSAMA.path)) return goToSections(YAYOI_KUSAMA.selector)
  if (pathname.includes(NIGHT_OF_STARS.path)) return goToSections(NIGHT_OF_STARS.selector)
  if (pathname.includes(COLLECTION.path)) return goToSections(COLLECTION.selector)

  if (pathname.includes(RESULT_POINT_ONE.path)) return goToResults(RESULT_POINT_ONE.selector)
  if (pathname.includes(RESULT_POINT_TWO.path)) return goToResults(RESULT_POINT_TWO.selector)
  if (pathname.includes(RESULT_POINT_THREE.path)) return goToResults(RESULT_POINT_THREE.selector)
  if (pathname.includes(RESULT_POINT_FOUR.path)) return goToResults(RESULT_POINT_FOUR.selector)
}
listener()

window.addEventListener('popstate', listener)
