// Ref app: https://apkpure.com/es/would-you-rather/macrostudios.wouldyourather#macrostudios.wouldyourather-3

import React from 'react'
import { SafeAreaView, Text, StatusBar, View } from 'react-native'

import { styles } from './styles'
import { strings } from 'src/scenes/Board/strings'
import { ButtonChoice, Option } from 'src/scenes/Board/ButtonChoice'
import { noop } from 'lodash'

declare const global: { HermesInternal: null | {} }

export const Board = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.board}>
        <Text style={styles.header}>{strings.header}</Text>
        <View style={styles.optionsContainer}>
          <ButtonChoice
            frequency={'80%'}
            onAction={noop}
            text={'Question 1'}
            option={Option.A}
          />
          <ButtonChoice
            isSelected={true}
            frequency={'20%'}
            onAction={noop}
            text={'Question 2'}
            option={Option.B}
          />
        </View>
      </SafeAreaView>
    </>
  )
}
