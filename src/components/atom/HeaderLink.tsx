import Link from 'next/link'

type Props = {
  href: string
  linkTitle: string
}

const HeaderLink = (props: Props) => {
  return (
    <Link href={props.href}>
      <a className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-secondary mr-4'>
        {props.linkTitle}
      </a>
    </Link>
  )
}

export default HeaderLink
