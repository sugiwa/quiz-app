import { NextPage } from 'next'
import Title from '@atom/Title'
import MainContent from '@molecule/MainContent'

const Answer: NextPage = () => {
  return (
    <>
      <Title title='Answer' />

      <MainContent
        title='Explanation'
        sentence='××××××××××××××××××××××××××××××'
        choice='××××××××××'
        func={() => {}}
      />
    </>
  )
}

export default Answer
