import React from 'react'
import { Text, TouchableHighlight } from 'react-native'

import { styles } from './styles'
import { Palette } from 'src/styles/Color'
import { noop } from 'lodash'

declare const global: { HermesInternal: null | {} }

export enum Theme {
  Primary = 1,
  Secondary = 2,
}

interface Props {
  text: string
  theme: Theme
}

const themeProps = {
  [Theme.Primary]: {
    color: Palette.Option1,
    underlayColor: Palette.Option1Pressed,
  },
  [Theme.Secondary]: {
    color: Palette.Option2,
    underlayColor: Palette.Option2Pressed,
  },
}

export const ButtonChoice = ({ text, theme }: Props) => {
  const { color, underlayColor } = themeProps[theme]

  return (
    <TouchableHighlight
      style={[styles.singleOptionContainer, { backgroundColor: color }]}
      activeOpacity={0.2}
      underlayColor={underlayColor}
      onPress={noop}>
      <Text style={styles.optionText}>{text}</Text>
    </TouchableHighlight>
  )
}
