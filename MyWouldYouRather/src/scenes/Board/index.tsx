// Ref app: https://apkpure.com/es/would-you-rather/macrostudios.wouldyourather#macrostudios.wouldyourather-3

import React from 'react'
import {
  SafeAreaView,
  Text,
  StatusBar,
  TouchableHighlight,
  View,
} from 'react-native'

import { styles } from './styles'
import { strings } from 'src/scenes/Board/strings'
import { Palette } from 'src/styles/Color'
import { noop } from 'lodash'

declare const global: { HermesInternal: null | {} }

export const Board = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.board}>
        <Text style={styles.header}>{strings.header}</Text>
        <View style={styles.optionsContainer}>
          <TouchableHighlight
            style={styles.singleOptionContainer}
            activeOpacity={0.2}
            underlayColor={Palette.Option1Pressed}
            onPress={noop}>
            <Text style={styles.optionText}>{'Question 1'}</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  )
}
