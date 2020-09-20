// Ref app: https://apkpure.com/es/would-you-rather/macrostudios.wouldyourather#macrostudios.wouldyourather-3

import React, { useState } from 'react'
import { SafeAreaView, Text, StatusBar, View } from 'react-native'

import { styles } from './styles'
import { strings } from 'src/scenes/Board/strings'
import { ButtonChoice, Option } from 'src/scenes/Board/ButtonChoice'
import { nextQuestion } from 'src/networking/controller/questions'

declare const global: { HermesInternal: null | {} }

export const Board = () => {
  const [selectedChoice, setChoice] = useState<Option | undefined>(undefined)
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const question = nextQuestion(questionIndex)
  const onSelection = (option: Option) => {
    if (!selectedChoice) {
      setChoice(option)
      return
    }

    setChoice(undefined)
    setQuestionIndex(questionIndex + 1)
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.board}>
        <Text style={styles.header}>{strings.header}</Text>
        <View style={styles.optionsContainer}>
          <ButtonChoice
            frequency={question.frequencyA}
            setChoice={onSelection}
            option={Option.A}
            selectedChoice={selectedChoice}
            text={question.optionA}
          />
          <ButtonChoice
            frequency={question.frequencyB}
            setChoice={onSelection}
            option={Option.B}
            selectedChoice={selectedChoice}
            text={question.optionB}
          />
        </View>
      </SafeAreaView>
    </>
  )
}
