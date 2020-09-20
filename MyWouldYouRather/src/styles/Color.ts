export enum Color {
  MateGrey = '#303030',
  White = '#FFFFFF',
}

export const Palette = {
  Background: Color.MateGrey,
  Option1: redWithAlpha(),
  Option1Pressed: redWithAlpha(0.6),
  Option2: blueWithAlpha(),
  Option2Pressed: blueWithAlpha(0.6),
  Text: Color.White,
}

function checkOpacityValue(opacity: number) {
  if (opacity < 0 || opacity > 1) {
    throw new Error(`opacity must between 0 and 1, got ${opacity}`)
  }
}

export function redWithAlpha(opacity = 1): string {
  checkOpacityValue(opacity)
  return `rgba(219, 47, 48, ${opacity})`
}

export function blueWithAlpha(opacity = 1): string {
  checkOpacityValue(opacity)
  return `rgba(48, 132, 222, ${opacity})`
}
