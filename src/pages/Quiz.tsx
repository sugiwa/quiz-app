import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Title from '@atom/Title'
import MainContent from '@molecule/MainContent'

type SubmitAnswer = () => void

const Quiz: NextPage = () => {
  const router = useRouter()

  const submitAnswer: SubmitAnswer = () => {
    router.push('/Answer')
  }

  return (
    <>
      <Title title='Quiz Page' />
      <MainContent
        title='〇問目'
        sentence='〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇?'
        choice='〇〇〇〇〇〇〇〇'
        func={submitAnswer}
      />
    </>
  )
}

export default Quiz
