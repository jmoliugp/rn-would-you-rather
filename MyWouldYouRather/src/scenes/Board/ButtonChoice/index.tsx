import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

import { styles } from './styles'
import { Palette } from 'src/styles/Color'

declare const global: { HermesInternal: null | {} }

export enum Option {
  A = 1,
  B = 2,
}

interface Props {
  frequency?: number
  selectedChoice?: Option
  setChoice: (option: Option) => void
  text: string
  option: Option
}

const themeProps = {
  [Option.A]: {
    color: Palette.Option1,
    underlayColor: Palette.Option1Pressed,
  },
  [Option.B]: {
    color: Palette.Option2,
    underlayColor: Palette.Option2Pressed,
  },
}

export const ButtonChoice = ({
  frequency,
  selectedChoice,
  setChoice,
  text,
  option,
}: Props) => {
  const { color, underlayColor } = themeProps[option]
  const isSelected = selectedChoice === option
  const onAction = () => setChoice(option)

  return (
    <TouchableHighlight
      style={[styles.button, { backgroundColor: color }]}
      activeOpacity={0.2}
      underlayColor={underlayColor}
      onPress={onAction}>
      <View style={styles.container}>
        <View style={styles.header}>
          {selectedChoice && (
            <Text style={styles.optionText}>{`${frequency}%`}</Text>
          )}
          {isSelected && <Text style={styles.optionText}>✓</Text>}
        </View>
        <View style={styles.content}>
          <Text style={styles.optionText}>{text}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}
