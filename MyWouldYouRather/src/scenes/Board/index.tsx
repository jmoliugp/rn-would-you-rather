// Ref app: https://apkpure.com/es/would-you-rather/macrostudios.wouldyourather#macrostudios.wouldyourather-3

import React, { useState } from 'react'
import { SafeAreaView, Text, StatusBar, View } from 'react-native'

import { styles } from './styles'
import { strings } from 'src/scenes/Board/strings'
import { ButtonChoice, Option } from 'src/scenes/Board/ButtonChoice'

declare const global: { HermesInternal: null | {} }

export const Board = () => {
  const [selectedChoice, setChoice] = useState<Option | undefined>(undefined)

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.board}>
        <Text style={styles.header}>{strings.header}</Text>
        <View style={styles.optionsContainer}>
          <ButtonChoice
            frequency={'80%'}
            setChoice={setChoice}
            option={Option.A}
            selectedChoice={selectedChoice}
            text={'Question 1'}
          />
          <ButtonChoice
            frequency={'20%'}
            setChoice={setChoice}
            option={Option.B}
            selectedChoice={selectedChoice}
            text={'Question 2'}
          />
        </View>
      </SafeAreaView>
    </>
  )
}
