import { StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Color'
import { normalizedFontSize, normalizedHeight } from 'src/styles/scale'

export const typography = StyleSheet.create({
  h1: {
    color: Palette.Text,
    fontFamily: 'verdana',
    fontSize: normalizedFontSize(24),
    lineHeight: normalizedFontSize(32),
    marginBottom: normalizedHeight(16),
  },
  h2: {
    color: Palette.Text,
    fontFamily: 'verdana',
    fontSize: normalizedFontSize(16),
    lineHeight: normalizedFontSize(28),
  },
})
