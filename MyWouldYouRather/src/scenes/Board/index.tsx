// Ref app: https://apkpure.com/es/would-you-rather/macrostudios.wouldyourather#macrostudios.wouldyourather-3

import React from 'react'
import { SafeAreaView, Text, StatusBar } from 'react-native'

import { styles } from './styles'
import { strings } from 'src/scenes/Board/strings'

declare const global: { HermesInternal: null | {} }

export const Board = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.board}>
        <Text style={styles.header}>{strings.header}</Text>
      </SafeAreaView>
    </>
  )
}
