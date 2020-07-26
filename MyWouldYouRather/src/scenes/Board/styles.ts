import { StyleSheet } from 'react-native'
import { Palette } from 'src/styles/Color'
import { typography } from 'src/styles/typography'
import { defaultSceneSpacing } from 'src/styles/common'

export const styles = StyleSheet.create({
  board: {
    alignItems: 'center',
    backgroundColor: Palette.Background,
    flexDirection: 'column',
    height: '100%',
    paddingVertical: defaultSceneSpacing,
    width: '100%',
  },
  header: { ...typography.h1, marginTop: defaultSceneSpacing },
  optionsContainer: {
    alignItems: 'stretch',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingVertical: defaultSceneSpacing,
  },
  optionText: typography.h2,
  singleOptionContainer: {
    alignItems: 'center',
    backgroundColor: Palette.Option1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    padding: defaultSceneSpacing,
    width: '100%',
  },
})
