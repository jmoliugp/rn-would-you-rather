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
  header: {
    ...typography.h1,
    flex: 8,
    marginTop: defaultSceneSpacing,
  },
  optionsContainer: {
    alignItems: 'stretch',
    flexDirection: 'column',
    flex: 92,
    justifyContent: 'center',
    paddingVertical: defaultSceneSpacing,
    width: '100%',
  },
  optionText: typography.h2,
  singleOptionContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: defaultSceneSpacing,
    width: '100%',
  },
})
