export const elements = {
  section: {
    HOME: { selector: 'home', path: '/' },
    YAYOI_KUSAMA: { selector: 'yayoi-kusama', path: 'yayoi-kusama' },
    NIGHT_OF_STARS: { selector: 'night-of-stars', path: 'night-of-stars' },
    COLLECTION: { selector: 'collection', path: 'collection' }
  },
  result: {
    POINT_ONE: { selector: 'point-one', path: 'point-one' },
    POINT_TWO: { selector: 'point-two', path: 'point-two' }

  },
  frame: {
    CONSTELLATION: { selector: 'constellation' },
    POINT_ONE: { selector: 'point-one' }
  }
}

export const { HOME, YAYOI_KUSAMA, NIGHT_OF_STARS, COLLECTION } = elements.section
export const { POINT_ONE: RESULT_POINT_ONE, POINT_TWO: RESULT_POINT_TWO } = elements.result
export const { CONSTELLATION, POINT_ONE } = elements.frame
