import { range, shuffle } from 'lodash'
import { stubQuestions } from 'src/networking/controller/questions/stubQuestions'

const shuffledQuestions = () => {
  const shuffledIds = shuffle(range(20))
  return shuffledIds.map(questionId =>
    stubQuestions.find(({ id }) => id === questionId),
  )
}

const questions = shuffledQuestions()

export const nextQuestion = (id: number) => {
  const index = id % questions.length
  return questions[index]!
}
