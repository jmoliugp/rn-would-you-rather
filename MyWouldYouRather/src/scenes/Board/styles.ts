import { StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Color'
import { typography } from 'src/styles/typography'

export const styles = StyleSheet.create({
  header: typography.h1,
  board: {
    alignItems: 'center',
    backgroundColor: Palette.Background,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
})
