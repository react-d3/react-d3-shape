"use strict";

/**
 * Get the horizontal translation amount based on point alignment.
 * @param [pointAlign='left'] - How the points should be aligned, left, center,
 *   or right
 * @param bandwidth - The width of a single band of the X scale
 * @returns {number} - How many horizontal pixels to translate
 */
export function getTranslateXAmount (pointAlign, bandwidth) {
  if ( pointAlign === 'center' ) {
    return bandwidth / 2;
  } else if ( pointAlign === 'right') {
    return bandwidth;
  }
  return 0;
}
