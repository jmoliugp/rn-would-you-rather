// Ref app: https://apkpure.com/es/would-you-rather/macrostudios.wouldyourather#macrostudios.wouldyourather-3

import React from 'react'
import { SafeAreaView, Text, StatusBar, View } from 'react-native'

import { styles } from './styles'
import { strings } from 'src/scenes/Board/strings'
import { ButtonChoice, Theme } from 'src/scenes/Board/ButtonChoice'

declare const global: { HermesInternal: null | {} }

export const Board = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.board}>
        <Text style={styles.header}>{strings.header}</Text>
        <View style={styles.optionsContainer}>
          <ButtonChoice text={'Question 1'} theme={Theme.Primary} />
          <ButtonChoice text={'Question 2'} theme={Theme.Secondary} />
        </View>
      </SafeAreaView>
    </>
  )
}
