import { StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Color'
import { typography } from 'src/styles/typography'
import { defaultSceneSpacing } from 'src/styles/common'

export const styles = StyleSheet.create({
  header: { ...typography.h1, marginVertical: defaultSceneSpacing },
  board: {
    alignItems: 'center',
    backgroundColor: Palette.Background,
    flexDirection: 'column',
    height: '100%',
    padding: defaultSceneSpacing,
    width: '100%',
  },
})
