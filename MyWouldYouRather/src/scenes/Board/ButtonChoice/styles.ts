import { StyleSheet } from 'react-native'
import { typography } from 'src/styles/typography'
import { defaultSceneSpacing } from 'src/styles/common'

export const styles = StyleSheet.create({
  button: {
    height: '50%',
    padding: defaultSceneSpacing,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  optionText: typography.h2,
})
