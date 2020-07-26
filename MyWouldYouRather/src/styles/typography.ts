import { StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Color'
import { normalizedFontSize } from 'src/styles/scale'

export const typography = StyleSheet.create({
  h1: {
    color: Palette.Text,
    fontFamily: 'verdana',
    fontSize: normalizedFontSize(26),
    lineHeight: normalizedFontSize(32),
  },
  h2: {
    color: Palette.Text,
    fontFamily: 'verdana',
    fontSize: normalizedFontSize(20),
    lineHeight: normalizedFontSize(28),
  },
})
