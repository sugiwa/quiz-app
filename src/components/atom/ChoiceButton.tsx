type Props = {
  choice: string
  buttonFunction: () => void
}

const ChoiceButton = (props: Props) => {
  return (
    <button
      className='border w-full p-5 my-3 hover:bg-black hover:bg-opacity-10'
      onClick={props.buttonFunction}
    >
      {props.choice}
    </button>
  )
}

export default ChoiceButton
