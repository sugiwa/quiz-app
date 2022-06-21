import Link from 'next/link'

type Props = {
  href: string
  title: string
}

const TextLink = (props: Props) => {
  return (
    <Link href={props.href}>
      <a className='block text-center mt-4 lg:inline-block lg:mt-0 text-black hover:text-secondary mr-4'>
        {props.title}
      </a>
    </Link>
  )
}

export default TextLink
