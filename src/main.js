
import { goTo } from './utils/go-to'
import { setSelectorLink, setSelectorSection, setSelectorResult, setSelectorFrame } from './utils/class-selector'
import { ACTIVE, NO_VIEW } from './constants/modifiers'
import { LINK, RESULT, SECTION } from './constants/blocks'
import { HOME, YAYOI_KUSAMA, NIGHT_OF_STARS, COLLECTION, RESULT_POINT_ONE, RESULT_POINT_TWO, CONSTELLATION, POINT_ONE, POINT_TWO, POINT_THREE, POINT_FOUR } from './constants/elements'
import { addFrameEffect, removeFrameEffect } from './utils/frame-effects'
import { removeLinkEffect } from './utils/link-effects'
import { addSectionEffect } from './utils/section-effects'
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
})()

$linkHome.addEventListener('click', (event) => goTo(event, HOME.path))
$linkYayoiKusama.addEventListener('click', (event) => goTo(event, YAYOI_KUSAMA.path))
$linNightOfStars.addEventListener('click', (event) => goTo(event, NIGHT_OF_STARS.path))
$linkCollection.addEventListener('click', (event) => goTo(event, COLLECTION.path))
$frameConstellation.addEventListener('mouseenter', () => addFrameEffect($frameConstellation, CONSTELLATION.selector))
$frameConstellation.addEventListener('mouseout', () => removeFrameEffect($frameConstellation, CONSTELLATION.selector))

/** */

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
  addSectionEffect($sectionYayoiKusama, YAYOI_KUSAMA.selector)
  addSectionEffect($sectionNightOfStars, NIGHT_OF_STARS.selector)
  addSectionEffect($sectionCollection, COLLECTION.selector)
}

const resetUnderlineLinks = () => {
  removeLinkEffect($linkYayoiKusama, YAYOI_KUSAMA.selector)
  removeLinkEffect($linNightOfStars, NIGHT_OF_STARS.selector)
  removeLinkEffect($linkCollection, COLLECTION.selector)
}

const navigation = (element) => {
  resetViewContent()
  resetUnderlineLinks()

  if (element !== HOME.selector) {
    const $section = setSelectorSection(element)
    const $link = setSelectorLink(element)

    $section.classList.remove(SECTION + element + NO_VIEW)
    $link.classList.add(LINK + element + ACTIVE)
  }
}

const listener = () => {
  const { pathname } = window.location

  pathname.includes(HOME.path) && navigation(HOME.selector)
  pathname.includes(YAYOI_KUSAMA.path) && navigation(YAYOI_KUSAMA.selector)
  pathname.includes(NIGHT_OF_STARS.path) && navigation(NIGHT_OF_STARS.selector)
  pathname.includes(COLLECTION.path) && navigation(COLLECTION.selector)
}
listener()

window.addEventListener('popstate', listener)
