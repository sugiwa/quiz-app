import ChoiceButton from '@atom/ChoiceButton'

type Props = {
  title: string
  sentence: string
  choice: string
  func: () => void
}

const MainContent = (props: Props) => {
  return (
    <div className='bg-white border p-4 max-w-xxs sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-xl mx-auto'>
      <h3>{props.title}</h3>

      <div className='mx-auto'>
        <p className='break-words text-left py-10'>{props.sentence}</p>

        <ChoiceButton choice={props.choice} buttonFunction={props.func} />
        <ChoiceButton choice={props.choice} buttonFunction={props.func} />
        <ChoiceButton choice={props.choice} buttonFunction={props.func} />
        <ChoiceButton choice={props.choice} buttonFunction={props.func} />
      </div>
    </div>
  )
}

export default MainContent
