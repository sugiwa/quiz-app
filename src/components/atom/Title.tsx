type Props = {
  title: string
}

const Title = (props: Props) => {
  return <h2 className='py-16 text-6xl'>{props.title}</h2>
}

export default Title
